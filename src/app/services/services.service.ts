import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  tasks: any = [
    {
      title: 'Main Task',
      description: 'Do this as soon as possible',
      checked: false,
      importance: false,
      category: 'science'
  },
  {
      title: 'Second Task',
      description: 'Important',
      checked: false,
      importance: false,
      category: 'physics'
  },
  {
      title: 'Third Task',
      description: 'Some What Important',
      checked: false,
      importance: false,
      category: 'physics'
  },
  {
      title: 'Fourth Task',
      description: 'Not that much important',
      checked: false,
      importance: false,
      category: 'astrophysics'
  }
  ];
  // deletion Id
  deleteId!:Number;

   // new tasks by default
   newTasks: any = [];

  getTaskItems(){
    return this.tasks;
  }

  // deleting a task
  finallyReceivedDeletionId(taskId:Number){
    console.log(taskId);
    this.deleteId = taskId;
    // filter out tasks
    const tasksAfterDelete: any = [];
    this.tasks.map((singleTask: any)=> 
    singleTask.id !== taskId && tasksAfterDelete.push(singleTask));
    // renewing the new tasks
    return tasksAfterDelete;
}
}
