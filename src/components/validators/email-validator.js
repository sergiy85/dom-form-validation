import {Validator} from './validator.js';

export class EmailValidator extends Validator {
  constructor() {
    super();
    this.emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  }
  validate(value) {
    return this.emailRegExp.test(value);
  }
}