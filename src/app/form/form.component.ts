import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TodoListService } from '../list-todo/todo-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private todoListService: TodoListService, private router: Router) { }

  formTask: FormGroup;
  
  labels: object[] = [
    {color: '#61bd4f', name: 'value1', id: 1},
    {color: '#eb5a46', name: 'value2', id: 2},
    {color: '#f2d600', name: 'value3', id: 3},
    {color: '#c377e0', name: 'value4', id: 4},
  ];

  createFormTask() {
    this.formTask = this.fb.group({
      title: [
        '', 
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])
      ],
      text: [
        '', 
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(120)
        ])
      ],
      houer: [new Date()],
      id: [''],
      label: [
        '', 
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  private saveTodo(param: any): Object {
    return this.todoListService.saveTodo(param).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  save(): void {
    this.saveTodo(this.formTask.value);
  }

  ngOnInit() {
    this.createFormTask();
  }

}
