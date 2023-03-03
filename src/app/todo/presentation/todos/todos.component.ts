import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  // liste des Todos
  todos: Array<TodoEntity> = [];

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
}
