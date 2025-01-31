import { subtractFromDate } from '../../../src';
import { generateDateModifierTestSuites } from './date-modifiers-test-suites';

describe(`subtractFromDate`, () => {
  generateDateModifierTestSuites(subtractFromDate, 'subtract', 'from');
});
