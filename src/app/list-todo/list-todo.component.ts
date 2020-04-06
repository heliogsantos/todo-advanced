import { Component, OnInit } from '@angular/core';

import { NewTask } from './new-task';
import { TodoListService } from './todo-list.service';
import { DataService } from './../data-service.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  constructor(private data: DataService, private todoListService: TodoListService) { }

  todos: NewTask;
  textSearch: string;

  ngOnInit() {
    this.data.mesagemFonte.subscribe(users => this.textSearch = users);
       this.todoListService.getTodos().subscribe((todo: NewTask) => {
        this.todos = todo;
      });
  }

}
