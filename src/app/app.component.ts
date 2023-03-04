import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { BackendApiSource } from './todo/infra/helpers/backend/BackendSource';

import { HttpSource } from './todo/infra/helpers/http/HttpSource';
import { HttpSourceSelection } from './todo/infra/helpers/http/HttpSourceSelection';
import { AngularHttp } from './todo/infra/http/AngularHttp';
import { AxiosHttp } from './todo/infra/http/AxiosHttp';
import { HttpServiceImp } from './todo/infra/services/HttpServiceImp';
import { RouterServiceImp } from './todo/infra/services/RouterServiceImp';
import { RouterSourceSelection } from './todo/infra/helpers/router/RouterSourceSelection';
import { AngularRouter } from './todo/infra/router/AngularRouter';
import { RouterSource } from './todo/infra/helpers/router/RouterSource';
import { ApiServiceImp } from './todo/infra/services/ApiServiceImp';
import { EnvironmentBackendSelection } from './todo/infra/helpers/environment/EnvironmentBackendSelection';
import { ApiModels } from './todo/infra/backendApi/ApiModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Selection router
  protected routerSelection: RouterSourceSelection;

  title = 'todo - FrontEnd';
  
  constructor(private router: Router) {   
    this.routerSelection = new RouterSourceSelection(new AngularRouter(router));    
  } 

  ngOnInit() {
    this.setRouterService();    

    // Navigation vers les todos
    RouterServiceImp.getRouter().navigate('/todos');
  } 

  /**
   * Selection router
   */
  setRouterService() {
    const routerServiceImp = new RouterServiceImp(this.routerSelection);
    routerServiceImp.setRouter(RouterSource.angularRouter);
  }
}
