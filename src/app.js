import './main.css';

/* 
 *********** MAIN COMPONENTS *************
 */
import {FormControl} from "./components/form-control";
import {FormGroup} from "./components/form-group";

/* 
 *********** VALIDATORS *************
 */
import {RequiredValidator} from "./components/validators/required-validator";
import {EmailValidator} from "./components/validators/email-validator";
import {NumberValidator} from "./components/validators/number-validator";
import {MinValidator} from "./components/validators/min-validator";
import {MaxValidator} from "./components/validators/max-validator";
import {MaxLengthValidator} from "./components/validators/maxlength-validator";
import {MinLengthValidator} from "./components/validators/minlength-validator";
import {PatternValidator} from "./components/validators/pattern-validator";


const formGroup = new FormGroup('test-form', [
  new FormControl('input-1', null, [new RequiredValidator(), new PatternValidator(/[a-zA]+$/)]),
  new FormControl('input-2', null, [new RequiredValidator(), new EmailValidator(), new MaxLengthValidator(15)]),
  new FormControl('input-3', null, [new RequiredValidator(), new PatternValidator(/^[a-zA-Z0-9_]+$/)]),
  new FormControl('input-4', null, [new RequiredValidator(), new NumberValidator(), new MinValidator(10), new MaxValidator(100), new MaxLengthValidator(4), new MinLengthValidator(2)])
]);

console.log(formGroup.value);

formGroup.valueChange.subscribe(change => {
  console.log('FormGroup change', change);
});

formGroup.statusChange.subscribe(change => {
  console.log('FormGroup change', change);
});

// const inputFirst = new FormControl('input-1', null, [new RequiredValidator(), new PatternValidator(/^[a-zA]+$/)]);
// inputFirst.valueChange.subscribe(change => {
//    console.log('FormControl value:', change);
//  });
// inputFirst.statusChange.subscribe(change => {
//    console.log('FormControl status:', change);
//  });



