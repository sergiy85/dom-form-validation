import {Validator} from './validator.js';

export class PatternValidator extends Validator {
  constructor(patternRegExp) {
    super();
    this.patternRegExp = patternRegExp; 
  }

  validate(value) {
    return this.patternRegExp.test(value);
  }
}