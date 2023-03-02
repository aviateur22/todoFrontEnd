import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTodoSchema } from '../../domain/ports/todoSchema/AddTodoSchema';
import { UpdateTodoSchema } from '../../domain/ports/todoSchema/UpdateTodoSchema';
import { UseCaseServiceImp } from '../../domain/services/UseCaseServiceImp';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {

  // Titre de la page
  @Input() titlePageText: string = ''

  // Todo a ajouté ou updaté
  @Input() isTodoToUpdate: boolean = false;

  // FormBuilder Todo
  todoFormGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // Checl URL
    this.checkUrl();

    // Construction formBuilder
    this.constructFormGroup();
  }

  /**
   * Vérification des parametre de la route
   */
  checkUrl() {
      //vérification de l'URL et déduction de l'action UPDATE ou CREATE
			this.route.params.subscribe(params => {       
				if (params['id']) {
          this.isTodoToUpdate = true;
        }
      });
  }

  /**
   * Construction du formgroup
   */
  constructFormGroup() {
    this.todoFormGroup = this.fb.group({
      // id de la Todo
      id: [''],

      // Titre de la todo
      title: ['', Validators.required],

      // Description de la todo
      description: ['']
    })
  }

  /**
   * Vérification si ajout ou update d'une Todo
   */
  addEditTodo() {
    
    switch(this.isTodoToUpdate) {

      // Mise a jour
      case true:       
        const updateTodo: UpdateTodoSchema = {
          id: this.todoFormGroup.controls['id'].value,
          title: this.todoFormGroup.controls['title'].value,
          description: this.todoFormGroup.controls['description'].value
        }
        this.updateTodo(updateTodo);      
      break;

      // Ajout d'une Todo
      case false:
        const addTodo: AddTodoSchema = {
          title: this.todoFormGroup.controls['title'].value,
          description: this.todoFormGroup.controls['description'].value
        }
        this.addTodo(addTodo);
      break;
    }    
    console.log(this.todoFormGroup);
  }

  /**
   * Ajout d'un nouvelle Todo
   * @param {AddTodoSchema} todo 
   */
  addTodo(todo: AddTodoSchema) {    
    UseCaseServiceImp.getUseCasesServiceImp().addTodoUseCase.execute(todo).subscribe();
  }


  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   */
  updateTodo(todo: UpdateTodoSchema) {
    UseCaseServiceImp.getUseCasesServiceImp().updateOneTodoUseCase.execute(todo).subscribe();
  }

  
}
