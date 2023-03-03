import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { DeleteOneTodoSchema } from '../../domain/ports/todoSchema/DeleteOneTodoSchema';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';

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

  constructor(private router: Router, private toastr: ToastrService) { }

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
    UseCaseServiceImp.getUseCasesServiceImp().deleteOneTodoUseCase.execute(this.deleteTodo).subscribe({
      // Succes
      next: result=>{    
        // Masque la modal
        this.isModalToShow = false;
  
        // Rechargemrnt Todos
        this.findAllTodos();

        this.toastr.success('todo is deleted');
      },

      // Error
      error: error => {
        this.toastr.error(error.error.errorMessage);
      }      
    });   
  }
}
