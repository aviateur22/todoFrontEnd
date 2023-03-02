import { Component, Input, Output } from '@angular/core';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.constructFormGroup()
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

  // dd
  dispachtAction(event: Event) {
    
    if(this.isTodoToUpdate) {
      const todo: UpdateTodoSchema = {
        id: this.todoFormGroup.controls['id'].value,
        title: this.todoFormGroup.controls['title'].value,
        description: this.todoFormGroup.controls['description'].value
      }

      UseCaseServiceImp.getUseCasesServiceImp().updateOneTodoUseCase.execute(todo).subscribe(todo=>{
        console.log(todo);
      });
    } else {
      const todo: AddTodoSchema = {
        title: this.todoFormGroup.controls['title'].value,
        description: this.todoFormGroup.controls['description'].value
      }
      UseCaseServiceImp.getUseCasesServiceImp().addTodoUseCase.execute(todo).subscribe(todo=>{
        console.log(todo);
      });
    }
    console.log(this.todoFormGroup);
  }
}
