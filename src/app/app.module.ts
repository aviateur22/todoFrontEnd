import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Composant Html
import { TodosComponent } from './todo/presentation/todos/todos.component';
import { TodoCardComponent } from './todo/presentation/todo-card/todo-card.component';
import { TodoComponent } from './todo/presentation/todo/todo.component';
import { InputComponent } from './todo/presentation/todo-card/elements/input/input.component';
import { RectangleButtonComponent } from './todo/presentation/todo-card/elements/rectangle-button/rectangle-button.component';
import { TitlePageComponent } from './todo/presentation/todo-card/elements/title-page/title-page.component';
import { RoundedButtonComponent } from './todo/presentation/todo/elements/rounded-button/rounded-button.component';
import { ModalComponent } from './todo/presentation/todos/elements/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoCardComponent,
    TodoComponent,
    InputComponent,    
    RectangleButtonComponent,
    TitlePageComponent,
    RoundedButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
