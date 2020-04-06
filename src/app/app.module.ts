import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { DateComponent } from './header/date/date.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { CardComponent } from './list-todo/card/card.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DataService } from './data-service.service';
import { FormComponent } from './form/form.component';
import { TodoListService } from './services/todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DateComponent,
    ListTodoComponent,
    CardComponent,
    AddTaskComponent,
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [DataService, TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
