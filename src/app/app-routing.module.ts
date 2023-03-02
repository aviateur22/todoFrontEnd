import { NgModule } from '@angular/core';
import { TodoCardComponent } from './todo/presentation/todo-card/todo-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'update-todo', component: TodoCardComponent, title: 'mettre à jour une todo'},
  { path: 'add-todo', component: TodoCardComponent, title: 'ajouter une todo'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
