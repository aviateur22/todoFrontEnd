import { transition, style, animate, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { DeleteOneTodoSchema } from '../../domain/ports/todoSchema/DeleteOneTodoSchema';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';
import { BannerService } from '../services/banner.service';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.5s ease-in', style({
    opacity: 1
  }))
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.5s ease-out', style({
    opacity: 0
  }))
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [fadeIn, fadeOut]
})
export class TodosComponent {

  // liste des Todos
  todos: Array<TodoEntity> = [];

  // Affichage modal
  isModalToShow: boolean = false;

  // Todo a supprimer
  deleteTodo!: DeleteOneTodoSchema;

  constructor(
    private bannerService: BannerService,
    private router: Router, 
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Modification du text de la banner
    this.bannerService.setInitialBannerText();

    // Recherche des Todos
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
    // Modification du text de la banner
    this.bannerService.changeBannerText('ajouter un item')
    
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
