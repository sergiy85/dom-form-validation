import {Validator} from './validator.js';

export class MaxValidator extends Validator {
  constructor(max) {
    super();
    this.max = max;
  }

  validate(value) {
    return value <= this.max;
  }
}