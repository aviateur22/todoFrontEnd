import { Component } from '@angular/core';
import { BackendApiSource } from './todo/infra/helpers/backend/BackendSource';
import { BackendSourceApiSelection } from './todo/infra/helpers/backend/BackendSourceSelection';
import { ApiServiceImp } from './todo/infra/services/ApiServiceImp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private backendSourceApiSelection: BackendSourceApiSelection) {

  }
  title = 'todoFrontEnd';

  ngOnInit() {
    const apiServiceImp = new ApiServiceImp(this.backendSourceApiSelection);
    apiServiceImp.setBackendApi(BackendApiSource.mockBackendApi);
  }
}
