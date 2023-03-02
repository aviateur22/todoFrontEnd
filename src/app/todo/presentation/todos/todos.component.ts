import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input() todos: Array<TodoEntity> = [];

    constructor(private fb: FormBuilder) {}

  ngOnInit(){ } 


}
