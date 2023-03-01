import { TodoSchema } from "../../ports/todoSchema/TodoSchema";
import { ValidateTodoProperties } from "../../helpers/validators/ValidateTodoProperties";

export class TodoEntity implements TodoSchema {
  id: string;
  title: string;
  status: boolean;
  description: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(
    id: string, 
    title: string, 
    description: string, 
    status: boolean, 
    updatedAt: Date, 
    createdAt: Date
  ) {
    
    // Validation des propriétés
    new ValidateTodoProperties(this);

    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  
}