import { Component, OnInit } from '@angular/core';
import { ApiServiceImp } from '../../infra/services/ApiServiceImp';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  constructor() {

  }

  ngOnInit() {
    

    ApiServiceImp.getBackendApi().todoApi.findAllTodo().subscribe(e=>{
      console.log(e);
    });
  }

}
