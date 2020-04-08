import { Component, OnInit, Input } from '@angular/core';

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
  removeCard: boolean = false;
  @Input() deleteCard;
  @Input() spinner = true;

  remove(todo) {
    this.spinner = true;
    this.removeCard = true;
    todo[0] = true;

    this.todoListService.deleteTodo(todo).subscribe((todo) => {
      this.spinner = false;
      this.listTodos();
    });
  }

  private listTodos() {
    this.todoListService.getTodos().subscribe((todo: NewTask) => {
      this.todos = todo;
      this.spinner = false;
    });
  }

  ngOnInit() {
    this.data.mesagemFonte.subscribe(users => this.textSearch = users);

    this.listTodos();
  }
}
