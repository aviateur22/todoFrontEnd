import { PropertiesValidationException } from "src/app/todo/exceptions/PropertiesValidationException";

export class ValidateTodoProperties<T> {

  protected todo: T;

  constructor(todo: T) {
    this.todo = todo;
    this.propertiesValidation();
  }

  /**
   * Validation des propriétés d'une todo
   */
  protected propertiesValidation() {
    let key: keyof typeof this.todo;

    
    for(key in this.todo) {

      switch(key) {
        // Identité
        case 'id':
          this.identityPropertyValidation(this.todo[key] as string);
        break;

        // Titre
        case 'title':          
          this.titlePropertyValidation(this.todo[key] as string);          
        break;

        // Description
        case 'description':
          this.descriptionPropertyValidation(this.todo[key] as string);
        break;

        // Status
        case 'status':
          this.statusPropertyValidation(this.todo[key] as boolean);
        break;

        case 'createdAt':
          this.datePropertyValidation(this.todo[key] as Date, 'created date is mandatory');
        break;

        case 'updatedAt': 
          this.datePropertyValidation(this.todo[key] as Date, 'updated date is mandatory');
        break;
      }     
    }
  }

  /**
   * Validation du l'identité
   * @param {string} id 
   */
  identityPropertyValidation(id: string): void {
    if(id.trim().length < 1 ) {
      throw new PropertiesValidationException('error on todo identification');
    }
  }

  /**
   * Validation du titre
   * @param {string} title 
   */
  titlePropertyValidation(title: string): void {
    if(title.trim().length < 3 ) {
      throw new PropertiesValidationException('title is mandatory');
    }
  }

  /**
   * Validation de le descrtion
   * @param {string} description 
   */
  descriptionPropertyValidation(description: string): void {
    if(description.trim().length < 0 ) {
      throw new PropertiesValidationException('description is mandatory');
    }
  }

  /**
   * Validation du status
   * @param  {boolean} status 
   */
  statusPropertyValidation(status: boolean): void {
    if(status === null) {
      throw new PropertiesValidationException('status is mandatory');
    }
  }

  /**
   * Validation d'une date
   * @param  {Date} date 
   */
  datePropertyValidation(date: Date, errorMessage: string): void {
    if(date === null) {
      throw new PropertiesValidationException(errorMessage);
    }
  }
}