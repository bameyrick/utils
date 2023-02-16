export interface IsEqualTestDefinition {
  description: string;
  a: any;
  b: any;
  expected: boolean;
  only?: boolean;
}

export interface IsEqualTestSuite {
  description: string;
  tests: IsEqualTestDefinition[];
}
