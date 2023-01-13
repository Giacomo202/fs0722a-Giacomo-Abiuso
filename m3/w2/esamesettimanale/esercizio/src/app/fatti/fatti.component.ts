import { Component, OnInit,Input} from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-fatti',
  templateUrl: './fatti.component.html',
  styleUrls: ['./fatti.component.scss']
})
export class FattiComponent {
  arrayfatti: Task[] = [];

  constructor(private srv: TodoService) {
  }

  ngOnInit() {
    this.arrayfatti = this.srv.serviceList.filter(todo => { return todo.completed == true })
  }

  //funzione per eliminare task
  removeTaskFatti(id: number) {
    this.arrayfatti = this.arrayfatti.filter(item => item.id !== id)
    this.srv.removeTaskService(id)
  }

  //funzione per completare task
  sfatti(id: number) {
    this.arrayfatti[id].completed = false
  }


}

