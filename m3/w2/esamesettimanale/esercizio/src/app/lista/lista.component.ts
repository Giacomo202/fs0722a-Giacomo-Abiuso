
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  list: Task[] = [];

  constructor(private srv: TodoService) {
  }

  ngOnInit() {
    this.list = this.srv.serviceList.filter(todo => { return todo.completed == false })
  }

  //funzione per aggiungere task
  addTask(item: String) {
    console.log(this.list);
    this.list.push({ id: this.list.length, title: item, completed: false });
    console.log(this.list);
    this.srv.addTask(item);
  }

  //funzione per eliminare task
  removeTaskLista(id: number) {
    this.list = this.list.filter(item => item.id !== id)
    this.srv.removeTaskService(id)
  }

  //funzione per completare task
  fatti(id: number) {
    this.list[id].completed = true
  }



}




