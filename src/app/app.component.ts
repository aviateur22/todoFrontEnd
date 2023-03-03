import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
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
import { RouterServiceImp } from './todo/infra/services/RouterServiceImp';
import { RouterSourceSelection } from './todo/infra/helpers/router/RouterSourceSelection';
import { AngularRouter } from './todo/infra/router/AngularRouter';
import { RouterSource } from './todo/infra/helpers/router/RouterSource';

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

  // Slection router
  protected routerSelection: RouterSourceSelection;

  title = 'todo - FrontEnd';
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {    
    this.httpSourceSelection = new HttpSourceSelection(new AngularHttp(http), new AxiosHttp());
    this.backendSourceApiSelection = new BackendSourceApiSelection(new TodoLocalApi(), new TodoWebApi(), new TodoMockApi());
    this.routerSelection = new RouterSourceSelection(new AngularRouter(router, route));
  } 

  ngOnInit() {    
    this.setBackendService();
    this.setHttpService();
    this.setRouterService();

    // Navigation vers les todos
    RouterServiceImp.getRouter().navigate('/todos');
  }

  /**
   * Selection du backend
   */
  setBackendService() {   
    // Selection backend
    const apiServiceImp = new ApiServiceImp(this.backendSourceApiSelection);
    apiServiceImp.setBackendApi(BackendApiSource.localBackEndApi);
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
   * Selection router
   */
  setRouterService() {
    const routerServiceImp = new RouterServiceImp(this.routerSelection);
    routerServiceImp.setRouter(RouterSource.angularRouter);
  }
}
