import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  form: FormGroup;
    
  location = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "Location": this.location,
      });
  }
  getForm() {
   return this.form;
  }

  // userInput : string;
  // @Output()
  // inputChange: EventEmitter<string> = new EventEmitter<string>();
  // constructor() { }

  // onInputChange(){
  //   this.inputChange.emit(this.userInput);
  //   console.log(this.userInput)
  // }
}
