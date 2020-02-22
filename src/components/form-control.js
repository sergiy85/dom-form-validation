/* 2* FORM CONTROL 

FormControl class should accept id of input element and array of validators. It needs input Id for connecting and monitoring target input element.
On each input's value change it should:

1* validate changed value
2* update control's status
3* update control's value
4* notify listeners about status and value update

*/
import {EventEmitter} from './event-emiter.js'; 

export class FormControl {

  constructor(inputId, initialValue, validators) {
    const regEmpty = (/^\s+$/g).test(inputId); // проверка на пробел в строке

    if (inputId.length > 0 && !regEmpty) {
      this.inputId = inputId;
    }
    if (Array.isArray(validators)) {
      this.validators = validators;
    }
    this.status = false;
    this.value = initialValue;
    this.valueChange = new EventEmitter();
    this.statusChange = new EventEmitter();
    
    const input = document.getElementById(this.inputId);

    if (input == null) {
      return; // abort
    }

    const eventListener = (event) =>{
      const valueValidate = validators.every(validator => {
        return validator.validate(event.target.value);
      })
      //  update control's status
      this.status = valueValidate;
      //  update control's value
      this.value = input.value;

      //  notify listeners about status and value update
      this.valueChange.emit({
        inputId: this.inputId,
        value: this.value
      });

      this.statusChange.emit({
        inputId: this.inputId,
        status: this.status
      });

      if(valueValidate === true){
        input.removeEventListener('blur', eventListener);
      }
    }
    
    input.addEventListener('blur', eventListener);
  }
}