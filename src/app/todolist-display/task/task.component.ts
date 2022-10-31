import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { TodoList } from '../todolist';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // single task object
  @Input() singleTask: any = {};
  // getting the task id value
  @Output() selectedTask =  new EventEmitter();
  @Output() selectCheckStatus = new EventEmitter();
  @Output() selectedCategory = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  // emitting the task id from the select function
  selectTask(taskId: Number){
    this.selectedTask.emit(taskId);
  }
  checkStatus(status:boolean, id:number){
    const checkDetails = {
      status: status,
      id: id
    }
    this.selectCheckStatus.emit(checkDetails);
  }

  // getting category
  selectCategory(category:String){
    this.selectedCategory.emit(category);
  }

}
