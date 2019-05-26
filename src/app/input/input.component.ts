import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  userInput : string;
  @Output()
  inputChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onInputChange(){
    this.inputChange.emit(this.userInput);
    console.log(this.userInput)
  }
}
