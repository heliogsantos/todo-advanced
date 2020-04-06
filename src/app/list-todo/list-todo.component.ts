import { NewTask } from './../models/new-task';
import { TodoListService } from './../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data-service.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  constructor(private data: DataService, private todoListService: TodoListService) { }

  todos: NewTask;

  textSearch: any;

  ngOnInit() {
    this.data.mesagemFonte.subscribe(users => this.textSearch = users.Name);
       this.todoListService.getTodos().subscribe((todo: NewTask) => {
        this.todos = todo;
      });
  }

}
