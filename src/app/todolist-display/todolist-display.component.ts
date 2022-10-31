import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoList } from './todolist';

@Component({
  selector: 'app-todolist-display',
  templateUrl: './todolist-display.component.html',
  styleUrls: ['./todolist-display.component.css']
})
export class TodolistDisplayComponent implements OnInit {

  // getting the tasks from main
  @Input() taskLists: TodoList[] = [];
  @Output() passDeletionIdToApp = new EventEmitter();
  // for passing it onto the main app
  @Output() receivedCheckedStatusFromTask = new EventEmitter();
  // checked list
  @Input() checkedList: TodoList[] = [];
  // selected category:
  @Output() sendCategoryToApp = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // receive the id;
  receiveDeletionId(taskId: Number){
    this.passDeletionIdToApp.emit(taskId);
  }
  receivedCheckedFromTask(checkedDetails: object){
    this.receivedCheckedStatusFromTask.emit(checkedDetails);
  }

  // receive selected category
  receiveSelectedCategory(category:String){
    this.sendCategoryToApp.emit(category);
  }
}
