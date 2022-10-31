import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Todo';
  tasks: any = [];

  // new tasks
  newTasks: any = [];

  // checked tasks
  checkedTaskCollection: any = [];
  // deletion id
  deletionId!: Number;

  //tasksByCategory
  tasksByCategory: any = [];
  categories: any = [];

  constructor(private taskServices: ServicesService){
  }

  // initial render
  ngOnInit(): void{ 
    // getting from services 
    this.tasks = this.taskServices.getTaskItems();
    this.newTasks = [...this.tasks];
    // initial category set
    this.categories = this.resetCategories(this.newTasks);
  
  }
  // get id
  receiveId(taskId:Number){
    const newTasks =  this.taskServices.finallyReceivedDeletionId(taskId);
    return this.newTasks = newTasks;
  }

  // adding a task
  addTask(addedTask: any){
    this.newTasks = [...this.newTasks, addedTask];
    // updating categories
    this.categories = this.resetCategories(this.newTasks);
  }

  // reset category by getting set version
  resetCategories(tasks: any){
    const categoryArray: any = [];
    tasks.map((singleTask: any)=> categoryArray.push(singleTask.category));
    const categorySetArray = new Set([...categoryArray]);
    return [...categorySetArray];
  }
  // show task based
  showTaskBasedCategory(category:String){
    const newTasksByCategory: any= [];
    for(let i = 0; i < this.newTasks.length; i++){
      if(this.newTasks[i].category.toLowerCase() === category.toLowerCase()){
        newTasksByCategory.push(this.newTasks[i]);
      }
    }
    return this.tasksByCategory = newTasksByCategory;
  }
  // received category
  finallyReceivedCategory(category:String){
    console.log(category);
  }
  // change importance status
  changeCheckedStatus(checkDetails: any){
    const {status, id} = checkDetails;
    // switch the respective task status using id and status from single task
    const afterCheckedTasks = this.newTasks.map((singleTask: any)=>{
      if(singleTask.id === id){
          return {
            ...singleTask,
            checked: !status
          }
      }else{
        return singleTask
      }
    });
    // updates checked tasks
    this.newTasks = afterCheckedTasks;
    // updating new tasks collection checked list
    const checkedList = this.newTasks.filter((singleTask:any)=> 
    singleTask.checked === true);
    this.checkedTaskCollection = checkedList;

  }

}
