import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  // id
  @Input() id: string = '';

  // name
  @Input() name: string = '';

  // type
  @Input() type: string = '';

  // placeholder
  @Input() placeholderText: string = '';

  // Lable text
  @Input() labelText: string = '';

  //formbuilder au complet
  @Input() todoFormGroup: FormGroup = new FormGroup({});

  @Input() controlName: string = ''

  ngOnInit() {
    
  }


}
