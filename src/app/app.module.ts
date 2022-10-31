import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistDisplayComponent } from './todolist-display/todolist-display.component';
import { TaskComponent } from './todolist-display/task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistDisplayComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
