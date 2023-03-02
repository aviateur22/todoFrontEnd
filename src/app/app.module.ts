import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todo/presentation/todos/todos.component';
import { TodoCardComponent } from './todo/presentation/todo-card/todo-card.component';
import { TodoComponent } from './todo/presentation/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './todo/presentation/elements/input/input.component';
import { RoundedButtonComponent } from './todo/presentation/elements/rounded-button/rounded-button.component';
import { RectangleButtonComponent } from './todo/presentation/elements/rectangle-button/rectangle-button.component';
import { TitlePageComponent } from './todo/presentation/elements/title-page/title-page.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoCardComponent,
    TodoComponent,
    InputComponent,
    RoundedButtonComponent,
    RectangleButtonComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
