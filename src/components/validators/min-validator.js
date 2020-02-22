import {Validator} from './validator.js';

export class MinValidator extends Validator {
  constructor(min) {
    super();
    this.min = min;
  }

  validate(value) {
    return value >= this.min;
  }
}