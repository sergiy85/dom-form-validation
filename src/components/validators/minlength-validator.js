import {Validator} from './validator.js';

export class MinLengthValidator extends Validator {
  constructor(minLength) {
    super();
    this.minLength = minLength;
  }

  validate(value) {
    return value.length >= this.minLength;
  }
}