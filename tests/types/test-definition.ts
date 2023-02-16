export interface TestDefinition {
  description: string;
  a: any;
  b: any;
  expected: boolean;
  only?: boolean;
}

export interface TestSuite {
  description: string;
  tests: TestDefinition[];
}
