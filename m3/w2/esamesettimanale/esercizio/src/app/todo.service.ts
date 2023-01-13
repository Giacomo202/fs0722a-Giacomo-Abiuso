import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  serviceList: Task[] = []

  //funzione per aggiungere task
  addTask(item: String) {
    this.serviceList.push({ id: this.serviceList.length, title: item, completed: false })

  }

  //funzione per eliminare task
  removeTaskService(id: number) {
    this.serviceList = this.serviceList.filter(item => item.id !== id)
  }

  //funzione per completare task
  fatti(id: number) {
    this.serviceList[id].completed = true

  }

  //funzione per completare task
  sfatti(id: number) {
    this.serviceList[id].completed = false
  }


  constructor() { }
}
