import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';
import { FindOneTodoSchema } from '../../domain/ports/todoSchema/FindOneTodoSchema';
import { AddTodoSchema } from '../../domain/ports/todoSchema/AddTodoSchema';
import { UpdateTodoSchema } from '../../domain/ports/todoSchema/UpdateTodoSchema';
import { TodoEntity } from '../../domain/entities/todo/TodoEntity';
import { RouterServiceImp } from '../../infra/services/RouterServiceImp';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {

  // Titre de la page
  titlePageTextHtml: string = 'ajouter un item'

  // Texte du boutton
  buttonTextHtml: string = 'ajouter';

  // statut Todo par default
  isTodoToUpdate: boolean = false;

  // FormBuilder Todo
  todoFormGroup: FormGroup = new FormGroup({});

  constructor (
    private fb: FormBuilder, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Construction formBuilder
    this.constructFormGroup();

    // Vérification si URL SaveTodo ou UpdateTodo
    this.checkUrl();
  }

  /**
   * Vérification des parametre de la route
   */
  checkUrl() {   
    this.route.params.subscribe(params => {  
      if (params['id']) {
        this.initializeUpdateTodo(params['id']);
      }      
    });
  }

  /**
   * Construction du formgroup
   */
  constructFormGroup(todoData?: TodoEntity) {    
    this.todoFormGroup = this.fb.group({
      // id de la Todo
      id: [todoData ? todoData.id : ''],

      // Titre de la todo
      title: [todoData ? todoData.title : '', Validators.required],

      // Description de la todo
      description: [todoData ? todoData.description : ''],

      // Statut de la todo
      status: [todoData ? todoData.status : false]
    })
  }

  /**
   * Initialisation d'une Todo a updater
   * @param {string} todoId
   */
  initializeUpdateTodo(todoId: string) {
    this.isTodoToUpdate = true;

    this.titlePageTextHtml = 'modifier un item';

    this.buttonTextHtml = 'modifier';
    
    // Recherche updateTodo 
    this.findOneTodo({
      id: todoId
    });
  }

  /**
   * Vérification si ajout ou update d'une Todo
   */
  addEditTodo() {  
    switch(this.isTodoToUpdate) {
      // update Todo
      case true: 
        this.updateTodo({
          id: this.todoFormGroup.controls['id'].value,
          title: this.todoFormGroup.controls['title'].value, 
          description: this.todoFormGroup.controls['description'].value,
          status: this.todoFormGroup.controls['status'].value     
        }); 
        break;

      // Ajout d'une Todo
      case false:        
        this.saveTodo({
          title: this.todoFormGroup.controls['title'].value, 
          description: this.todoFormGroup.controls['description'].value
        });
      break;
    }    
  }

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   */
  updateTodo(todo: UpdateTodoSchema) {
    UseCaseServiceImp.getUseCasesServiceImp().updateOneTodoUseCase.execute(todo).subscribe(result=>RouterServiceImp.getRouter().navigate("/todos"));
  }

  /**
   * Ajout d'une nouvelle Todo
   * @param {AddTodoSchema} todo 
   */
  saveTodo(todo: AddTodoSchema) {
    UseCaseServiceImp.getUseCasesServiceImp().addTodoUseCase.execute(todo).subscribe(result=> RouterServiceImp.getRouter().navigate('/todos'));    
  }

  /**
   * Recherche de 1 Todo
   * @param {FindOneTodoSchema} todo 
   */
  findOneTodo(todo: FindOneTodoSchema) {
    UseCaseServiceImp.getUseCasesServiceImp().findOneTodoUseCase.execute(todo).subscribe((todo: any)=>{

      // Exception si todo pas trouvé
      if(!todo) {
        throw new Error('todo not find');
      }

      let todoData: any;

      switch(Object.keys(todo).length > 2) {
      // MockBackend
      case true: todoData = todo; break;

        // LocalBackend-WebServer
      case false: todoData = todo.todo; break;
      }
      
      this.constructFormGroup(todoData);
    });
  }
}
