import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; 
import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { EnvironmentSource } from './app/todo/infra/helpers/environment/EnvironmentSource';
import { EnvironmentSourceSelection } from './app/todo/infra/helpers/environment/EnvironmentSourceSelection';
import { EnvironmentServiceImp } from './app/todo/infra/services/EnvironmentServiceImp';
import { HttpServiceImp } from './app/todo/infra/services/HttpServiceImp';
import { HttpSource } from './app/todo/infra/helpers/http/HttpSource';
import { HttpSourceSelection } from './app/todo/infra/helpers/http/HttpSourceSelection';
import { AngularHttp } from './app/todo/infra/http/AngularHttp';
import { AxiosHttp } from './app/todo/infra/http/AxiosHttp';
import { ApiServiceImp } from './app/todo/infra/services/ApiServiceImp';
import { EnvironmentBackendSelection } from './app/todo/infra/helpers/environment/EnvironmentBackendSelection';
import { ApiModels } from './app/todo/infra/backendApi/ApiModels';
import { TodoMockApi } from './app/todo/infra/backendApi/mock/todo/TodoMockApi';
import { TodoServerApi } from './app/todo/infra/backendApi/server/todo/TodoServerApi';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// // Anugular HttpClient
const httpClient = new HttpClient(new HttpXhrBackend({ 
  build: () => new XMLHttpRequest() 
}));

// Environemnt
const environmentSelection: number = EnvironmentSource.devWebServer;

const environmentServiceImp = new EnvironmentServiceImp(new EnvironmentSourceSelection());
environmentServiceImp.setEnvironment(environmentSelection);

// BackendApi Models
const apiServiceImp = new ApiServiceImp(new EnvironmentBackendSelection(new ApiModels(new TodoMockApi(), new TodoServerApi())));
apiServiceImp.setBackendApi(environmentSelection);

// HttpService
const httpServiceImp = new HttpServiceImp(new HttpSourceSelection(new AngularHttp(httpClient), new AxiosHttp()));
httpServiceImp.setHttp(HttpSource.angularHttp);


// // Angular Router
// new Router().navigate(['/'])

// // Router
// const routerServiceImp = new RouterServiceImp(new RouterSourceSelection(new AngularRouter(new Router())));
//routerServiceImp.setRouter(RouterSource.angularRouter);


