import { Component, Input} from '@angular/core';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { CheckToggleTodoSchema } from '../../domain/ports/todoSchema/CheckToggleTodoSchema';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';
import { RouterServiceImp } from '../../infra/services/RouterServiceImp';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // Données sur la Todo
  @Input() todo!: TodoEntity;

  // Titre de la todo
  todoTitleHtml: string = '';

  // Status
  todoStatusHtml: boolean = false;

  constructor() {}
  
  ngOnInit() {
   // Titre de la Todo
   this.todoTitleHtml = this.todo.title;

   // Status
   this.todoStatusHtml = this.todo.status;
  }

  /**
   * Affichage detail d'une Todo
   */
  showTodoContent() {
    RouterServiceImp.getRouter().navigate('./update-todo/' + this.todo.id);
  }

  /**
   * Modification du status de la Todo
   */
  checkToggleTodo(event: Event) {
    event.stopPropagation();
    
    // Todo a mettre a jour
    const checkToggleTodo: CheckToggleTodoSchema = {
      id: this.todo.id,
      status: !this.todo.status
    }

    // Mise a jour de la Todo
    UseCaseServiceImp.getUseCasesServiceImp().checkToggleTodoUseCase.execute(checkToggleTodo).subscribe();
  }
}
