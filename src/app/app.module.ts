import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewAllTodoComponent } from './view-all-todo/view-all-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myrout:Routes=[
  {
    path:"",
    component:AddTodoComponent
  },
  {
    path:"view",
    component:ViewAllTodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewAllTodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
