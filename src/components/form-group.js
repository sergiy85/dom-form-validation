/* 3* FORM GROUP 
  FormGroup class should accept an id of the target form and array of FormControls. On initialization step it should initialize the value field as an object with the following structure: key is a string that interprets control's id, value is a control's value
  On each child control's value change it should:

  1* update FormGroups value(only the value of changed control)
  if at least one child control has an invalid status, the FormGroup should have falsy status
  notify listeners about status and value update

 */
import {EventEmitter} from './event-emiter.js'; 

export class FormGroup{

  constructor(formId, controls){
    const regEmpty = (/^\s+$/g).test(formId); // проверка на пробел в строке
    if (formId.length > 0 && !regEmpty) {
      this.formId = formId;
    }
    if (Array.isArray(controls)) {
      this.controls = controls;
    }
    this.value = {};
    this.status = false;
    this.valueChange = new EventEmitter();
    this.statusChange = new EventEmitter();

    for(const control of this.controls){
      // initialize the value field
      this.value[control.inputId] = control.value;

      control.valueChange.subscribe(change =>{
        // update FormGroups status
        this.status = this.controls.every(input => {
          return input.status === true;
        });
        
        // update FormGroups value
        this.value[control.inputId] = control.value;

        // notify listeners about status and value update
        this.valueChange.emit({
          value: this.value
        });

        this.statusChange.emit({
          status: this.status
        });

      })
    }
  }
}
