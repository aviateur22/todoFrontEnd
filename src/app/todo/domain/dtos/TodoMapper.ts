import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todos/TodoEntity";

export class TodoMapper {
  /**
   * Renvoie les données d'une Todo
   * @returns 
   */
  static getTodoEntity(param: any): TodoEntity {
    return  ({
      id: param.id,
      title: param.title,
      status: param.status,
      description: param.description,
      createdAt: param.createdAt,
      updateAt: param.updateAt
    })
  }

  /**
   * Mapper Array<TodoModel> vers  Array<TodoEntity> 
   * @param { Array<any> } todos 
   * @returns { Array<TodoEntity>}
   */
  static getTodoEntities(todos: Array<any>): Array<TodoEntity> {
    
    // Array de TodoEntity
    let todoEntities: Array<TodoEntity> = [];

    todos.forEach(todo => {
      todoEntities.push(TodoMapper.getTodoEntity(todo));
    });

    return todoEntities;
  }
} 