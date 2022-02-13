import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTodoListComponent } from './input-todo-list/input-todo-list.component';
import { OtherPageComponent } from './other-page/other-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoListComponent,
    OtherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
