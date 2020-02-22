# DOM section task: form components

In this task we need to implement model and controller layer for our form component. It consists of the following components: `FormGroup`, `FormControl`, `Validator` and validation classes.

## Concept

`FormControl` represents an every single form control that target form contains. It should implement validation and communication logic between the `FormGroup` class and DOM representation of the target input.

`FormGroup` used for controlling a form element and its children(form controls). It should provide single interface to control HTML form.

## Validator

```ts
interface Validator {
    constructor(...options: any[]);
    
    validate(value: any): boolean;
}
```

`Validator` is a base class for specific validation rules. It should have method `validate` that returns `true`(at this point) and later will be overwritten in child classes following specific rule. This method has following signature: `Validator.validate(value: any): boolean`.

The list of validation rules:
- `Required` - checks if value is present
- `Email` - checks if value is valid email
- `Number` - checks if value is valid number
- `Min` - checks if number value is greater than a min value
- `Max` - checks if number value is less than a max value
- `MinLength` - checks if string value length is greater than min value
- `MaxLength` - checks if string value length is less than max value
- `Pattern` - checks if string value is matches a provided regexp

E.g. `EmailValidator` class inherits from `Validator` class and override `validate` method in order to check if value is valid email.

## FormControl

```ts
interface FormControl {
	status: boolean;
	value: any;
	validators: Array<Validator>;
	inputId: string;
	valueChange: EventEmitter<{inputId: string, value: any}>;
	statusChange: EventEmitter<{inputId: string, value: boolean}>;

	constructor(id: string, initialValue: any, validators?: Array<Validator>);
}
```

`FormControl` class should accept id of input element and array of validators. It needs input Id for connecting and monitoring target input element.

On each input's value change it should:

- validate changed value
- update control's status
- update control's value
- notify listeners about status and value update

## FormGroup

```ts
interface FormGroup {
	controls: Array<FormControl>;
	status: boolean;
	value: object;
	valueChange: EventEmitter<{inputId: string, value: any}>;
	statusChange: EventEmitter<{inputId: string, value: boolean}>;
	
	constructor(id: string, controls);
}
```

`FormGroup` class should accept an id of the target form and array of `FormControl`s. On initialization step it should initialize the `value` field as an object with the following structure: key is a string that interprets control's id, value is a control's value

On each child control's value change it should:
- update `FormGroup`s value(only the value of changed control)
- if at least one child control has an invalid status, the `FormGroup` should have falsy status
- notify listeners about status and value update

Example of usage:

```html
<form id="test-form">
    <p>
        <label for="input-1">Lorem, ipsum.</label>
        <input type="text" id="input-1" />
    </p>
    <p>
        <label for="input-2">Laborum, quo.</label>
        <input type="text" id="input-2" />
    </p>
    <p>
        <label for="input-3">Porro, nulla?</label>
        <input type="text" id="input-3" />
    </p>
    <p>
        <label for="input-4">Nihil, assumenda.</label>
        <input type="text" id="input-4" />
    </p>
</form>
```

```js
const formGroup = new FormGroup('test-form', [
    new FormControl('input-1', null, [ new RequireValidator() ]),
    new FormControl('input-2', null, [ new RequireValidator() ]),
    new FormControl('input-3', null, [ new RequireValidator() ]),
    new FormControl('input-4', null, [ new RequireValidator() ])
 ]);
  
 console.log(formGroup.value);
  
 formGroup.change.subscribe(change => {
	 console.log('FormGroup change', change);
 });
```