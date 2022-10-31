import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // form inputs
  title = new FormControl('');
  description = new FormControl('');
  category = new FormControl('');

  //outputting the task to main app component:
  @Output() outputAddtask = new EventEmitter<object>();

  constructor() { }

  // setting the values to title and description
  onSubmit(){ 
    // create a new task
    const title = this.title.getRawValue();
    const description = this.description.getRawValue();
    if(title === '' || null || undefined){
      return;
    }else{
      const newTask = {
        title: this.title.getRawValue(),
        description: this.description.getRawValue(),
        checked: false,
        importance: false,
        category: this.category.getRawValue(),
      }
      this.outputAddtask.emit(newTask)
    }
    this.title.reset();
    this.description.reset();
  }

  ngOnInit(): void {
  }

}
