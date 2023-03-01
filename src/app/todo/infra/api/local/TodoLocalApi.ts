import { Observable } from "rxjs";
import { TodoEntity } from "src/app/todo/domain/entities/todo/TodoEntity";
import { TodoApiSchema } from "src/app/todo/domain/ports/apiSchemas/TodoApiSchema";
import { AddTodoSchema } from "src/app/todo/domain/ports/todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "src/app/todo/domain/ports/todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "src/app/todo/domain/ports/todoSchema/UpdateTodoSchema";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoLocalApi implements TodoApiSchema {  
  
  constructor(private http: HttpClient) {

  }

  protected uri = 'http://localhost:4000';

  saveTodo(todo: AddTodoSchema): Observable<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  findAllTodo(): Observable<TodoEntity[]> {
    return this.http.get<TodoEntity[]>( this.uri + '/find-all-todos');
  }
  findOneTodo(todo: FindOneTodoSchema): Observable<TodoEntity | null> {
    throw new Error("Method not implemented.");
  }
  updateOneTodo(todo: UpdateTodoSchema): Observable<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  deleteOneTodo(todo: DeleteOneTodoSchema): Observable<boolean | TodoEntity> {
    throw new Error("Method not implemented.");
  }
  checkToggleTodo(todo: CheckToggleTodoSchema): Observable<TodoEntity> {
    throw new Error("Method not implemented.");
  }
 
  
}