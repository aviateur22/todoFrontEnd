import { Component, Input } from '@angular/core';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // Données sur la Todo
  @Input() todo!: TodoEntity;

  // Titre
  todoTitle: string = '';

  // Status
  todoComplete: boolean = false;

  ngOnInit() {
   this.todoTitle = this.todo.title;
   this.todoComplete = this.todo.status;
  }

  showTodoContent() {

  }

  toggleCheckTodo() {
    
  }
}
