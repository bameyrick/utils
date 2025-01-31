/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { deepStrictEqual } from 'assert';
import { Suite } from 'benchmark';
import * as cloneDeep from 'clone-deep';
import * as deepmerge from 'deepmerge';
import * as fastDeepEqual from 'fast-deep-equal/es6';
import * as lodash from 'lodash';
import * as markdownTable from 'markdown-table';
import * as ramda from 'ramda';
import * as _ from 'underscore';
import { isDeepStrictEqual } from 'util';
import { clone, isEqual, merge } from './src';
import { mergeTests } from './src/merge/mergeTestDefinitions.spec';
import { isEqualTests } from './src/type-predicates/isEqualTestDefinitions.spec';

interface Benchmark {
  name: string;
  packages: Record<string, any>;
  benchmark: (func: any) => void;
}

const benchmarks: Benchmark[] = [
  {
    name: `merge`,
    packages: {
      '@qntm-code/utils.merge': merge,
      deepmerge: deepmerge,
    },
    benchmark: func => {
      for (const { target, source } of mergeTests) {
        func(target, source);
      }
    },
  },
  {
    name: `clone`,
    packages: {
      '@qntm-code/utils.clone': clone,
      'lodash.cloneDeep': lodash.cloneDeep,
      'clone-deep': cloneDeep,
    },
    benchmark: func => {
      const values = [
        new Date(),
        ['a', 10, new Date()],
        {
          a: 'a',
          b: 10,
          c: new Date(),
        },
        [
          ['a', 10, new Date()],
          {
            a: 'a',
            b: 10,
            c: new Date(),
          },
        ],
        {
          array: ['a', 10, new Date()],
          object: {
            a: 'a',
            b: 10,
            c: new Date(),
          },

          a: 'a',
          b: 10,
          c: new Date(),
        },
        new Map([[1, 2]]),
        new Set([1, 2]),
        0,
        /foo/g,
        /foo/,
        new RegExp('foo', 'g'),
        new RegExp('foo'),
        Buffer.from('a'),
        Symbol('a'),
        new Error('a'),
      ];

      for (const value of values) {
        func(value);
      }
    },
  },
  {
    name: `isEqual`,
    packages: {
      '@qntm-code/utils.isEqual': isEqual,
      'fast-deep-equal': fastDeepEqual,
      'underscore.isEqual': _.isEqual,
      'lodash.isEqual': lodash.isEqual,
      'ramda.equals': ramda.equals,
      'util.isDeepStrictEqual': isDeepStrictEqual,
      'assert.deepStrictEqual': (a, b) => {
        try {
          deepStrictEqual(a, b);
          return true;
        } catch (e) {
          return false;
        }
      },
    },
    benchmark: func => {
      for (const testSuite of isEqualTests) {
        for (const test of testSuite.tests) {
          if (test.description != 'pseudo array and equivalent array are not equal') {
            func(test.a, test.b);
          }
        }
      }
    },
  },
];

let benchmarkIndex = 0;

function createSuite({ name, packages, benchmark }: Benchmark): void {
  const suite = new Suite();

  for (const packageName in packages) {
    suite.add(packageName, () => benchmark(packages[packageName]));
  }

  const results: Record<string, number> = {};

  console.log(`Benchmarking "${name}"...\n`);

  suite
    .on('cycle', event => (results[event.target.name] = event.target.hz))
    .on('complete', () => {
      console.log(
        markdownTable([
          [`Package`, 'Operations per second'],
          ...Object.entries(results)
            .sort((a, b) => b[1] - a[1])
            .map(([name, hz]) => [name, hz.toFixed(0).toString()]),
        ]),
        '\n'
      );

      benchmarkIndex++;

      if (benchmarkIndex < benchmarks.length) {
        createSuite(benchmarks[benchmarkIndex]);
      }
    })
    .run({ async: true });
}

createSuite(benchmarks[0]);
