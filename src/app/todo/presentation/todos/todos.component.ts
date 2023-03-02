import { Component, Input, OnInit } from '@angular/core';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input() todos: Array<TodoEntity> = [];

  constructor() {

  }

}
