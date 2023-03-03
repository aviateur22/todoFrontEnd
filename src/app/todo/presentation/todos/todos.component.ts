import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { DeleteOneTodoSchema } from '../../domain/ports/todoSchema/DeleteOneTodoSchema';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';
import { RouterServiceImp } from '../../infra/services/RouterServiceImp';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  // liste des Todos
  todos: Array<TodoEntity> = [];

  // Affichage modal
  isModalToShow: boolean = false;

  // Todo a supprimer
  deleteTodo!: DeleteOneTodoSchema;

  constructor(private router: Router) { }

  ngOnInit() {
    this.findAllTodos();
   } 

  /**
   * Récupération des Todos
   */
  findAllTodos() {  
    UseCaseServiceImp.getUseCasesServiceImp().findAllTodoUseCase.execute().subscribe((todos: any)=>{
      switch(Array.isArray(todos)) {
      // MockBackend
      case true: this.todos = todos; break;

        // LocalBackend-WebServer
      case false: this.todos = todos.todos; break;
      }
    });
  }

  /**
   * Redirection vers l'ajout d'une Todo
   */
  navigateToAddTodoUrl(){
    this.router.navigate(['./add-todo']);
  }

  /**
   * Suppression modal
   */
  hideModalConfirmation() {
    this.isModalToShow = false
  }

  /**
   * Affichage de la modal
   * @param {TodoEntity} data 
   */
  showModalConfirmation(deleteTodo: TodoEntity) {
    // Affichage modal
    this.isModalToShow = true;

    // Mise a jour dela todo a supprimer
    this.deleteTodo = deleteTodo;    
  }

  /**
   * Suppression d'une Todo
   */
  deleteSelectedTodo(){
    UseCaseServiceImp.getUseCasesServiceImp().deleteOneTodoUseCase.execute(this.deleteTodo).subscribe(result=>{    
      // Masque la modal
      this.isModalToShow = false;

      // Rechargemrnt Todos
      this.findAllTodos();
    });
  }
}
