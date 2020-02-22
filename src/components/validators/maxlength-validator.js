import {Validator} from './validator.js';

export class MaxLengthValidator extends Validator {
  constructor(maxLength) {
    super();
    this.maxLength = maxLength;
  }

  validate(value) {
    return value.length <= this.maxLength;
  }
}