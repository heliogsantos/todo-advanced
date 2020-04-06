import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormComponent } from './form/form.component';



export const routes: Routes = [
  { path: '', component:  ListTodoComponent },
  { path: 'adicionar', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
