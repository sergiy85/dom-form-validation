export class Validator {
  constructor(options) {
    if(Array.isArray(options)){
      this.options = options;
    }
  }

  validate(value) {
    return true;
  }
}
