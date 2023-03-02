import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoEntity } from './todo/domain/entities/todo/TodoEntity';
import { UseCaseServiceImp } from './todo/domain/services/UseCaseServiceImp';
import { TodoLocalApi } from './todo/infra/backendApi/local/TodoLocalApi';
import { TodoMockApi } from './todo/infra/backendApi/mock/TodoMockApi';
import { TodoWebApi } from './todo/infra/backendApi/web/TodoWebApi';
import { BackendApiSource } from './todo/infra/helpers/backend/BackendSource';
import { BackendSourceApiSelection } from './todo/infra/helpers/backend/BackendSourceSelection';
import { HttpSource } from './todo/infra/helpers/http/HttpSource';
import { HttpSourceSelection } from './todo/infra/helpers/http/HttpSourceSelection';
import { AngularHttp } from './todo/infra/http/AngularHttp';
import { AxiosHttp } from './todo/infra/http/AxiosHttp';
import { ApiServiceImp } from './todo/infra/services/ApiServiceImp';
import { HttpServiceImp } from './todo/infra/services/HttpServiceImp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Selection Backend
  protected backendSourceApiSelection: BackendSourceApiSelection;

  // Selection service Http
  protected httpSourceSelection: HttpSourceSelection<any, any>;
  
  constructor(private http: HttpClient) { 
    this.httpSourceSelection = new HttpSourceSelection(new AngularHttp(http), new AxiosHttp());
    this.backendSourceApiSelection = new BackendSourceApiSelection(new TodoLocalApi(), new TodoWebApi(), new TodoMockApi());
  }
  title = 'todo - FrontEnd';

  // liste des Todos
  todos: Array<TodoEntity> = [];

  ngOnInit() {    
    this.setBackendService();
    this.setHttpService();
    this.getAllTodos();
  }

  /**
   * Selection du backend
   */
  setBackendService() {   
    // Selection backend
    const apiServiceImp = new ApiServiceImp(this.backendSourceApiSelection);
    apiServiceImp.setBackendApi(BackendApiSource.mockBackendApi);
  }

  /**
   * selection du service Http
   */
  setHttpService() {
    // Selection Service http
    const httpServiceImp = new HttpServiceImp(this.httpSourceSelection);
    httpServiceImp.setHttp(HttpSource.angularHttp);
  }

  /**
   * Récupération des Todos
   */
  getAllTodos() {
    UseCaseServiceImp.getUseCasesServiceImp().findAllTodoUseCase.execute().subscribe((todos: any)=>{
      switch(Array.isArray(todos)) {
      // MockBackend
      case true: this.todos = todos; break;

        // LocalBackend-WebServer
      case false: this.todos = todos.todos; break;
      }
    });


  }
}
