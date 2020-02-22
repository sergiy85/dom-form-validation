import {Validator} from './validator.js';

export class NumberValidator extends Validator {
  constructor() {
    super();
  }

  checkNumber(value) {
    return !Number.isNaN(Number(value));
  }

  validate(value) {
    return this.checkNumber(value);
  }
}