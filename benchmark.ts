/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { deepStrictEqual } from 'assert';
import { Suite } from 'benchmark';
import * as fastDeepEqual from 'fast-deep-equal/es6';
import * as lodash from 'lodash';
import * as markdownTable from 'markdown-table';
import * as ramda from 'ramda';
import * as _ from 'underscore';
import { isDeepStrictEqual } from 'util';
import { isEqual } from './src';
import { isEqualTests } from './tests/isEqualTestDefinitions.spec';

const suite = new Suite();

const isEqualPackages: Record<string, any> = {
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
};

for (const packageName in isEqualPackages) {
  const func = isEqualPackages[packageName];

  suite.add(packageName, () => {
    for (const testSuite of isEqualTests) {
      for (const test of testSuite.tests) {
        if (test.description != 'pseudo array and equivalent array are not equal') {
          func(test.a, test.b);
        }
      }
    }
  });
}

const results: Record<string, number> = {};

suite
  .on('cycle', event => (results[event.target.name] = event.target.hz))
  .on('complete', () => {
    console.log(
      markdownTable([
        ['Package', 'Operations per second'],
        ...Object.entries(results)
          .sort((a, b) => b[1] - a[1])
          .map(([name, hz]) => [name, hz.toFixed(0).toString()]),
      ])
    );
  })
  .run({ async: true });
