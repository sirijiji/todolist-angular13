import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputTodoListComponent} from "./input-todo-list/input-todo-list.component";
import {OtherPageComponent} from "./other-page/other-page.component";

const routes: Routes = [
  { path: 'inputTodo', component: InputTodoListComponent },
  { path: 'otherPage', component: OtherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}

