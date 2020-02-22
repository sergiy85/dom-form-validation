import {Validator} from './validator.js';

export class RequiredValidator extends Validator {
  constructor() {
    super();
  }

  validate(value) {
    // check on empty fields
    if (
      (typeof value == 'undefined') ||
      (value == null) ||
      (value.length == 0) ||
      (value == "") ||
      (/^\s*$/).test(value)
    ) {
      return false;
    } else {
      return true;
    }
  }
}