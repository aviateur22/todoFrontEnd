import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoEntity } from "src/app/todo/domain/entities/todo/TodoEntity";
import { TodoApiSchema } from "src/app/todo/domain/ports/apiSchemas/TodoApiSchema";
import { AddTodoSchema } from "src/app/todo/domain/ports/todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "src/app/todo/domain/ports/todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "src/app/todo/domain/ports/todoSchema/UpdateTodoSchema";

@Injectable({
  providedIn: 'root'
})
export class TodoWebApi implements TodoApiSchema {
  saveTodo(todo: AddTodoSchema): Observable<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  findAllTodo(): Observable<TodoEntity[]> {
    throw new Error("Method not implemented.");
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