import { Component, OnInit } from '@angular/core';
import { Conti } from '../conti';
import { GetterBackendService } from '../getter-backend.service';

@Component({
  selector: 'app-conti-component',
  templateUrl: './conti-component.component.html',
  styleUrls: ['./conti-component.component.scss']
})
export class ContiComponentComponent implements OnInit{
  conti : Conti[] = [];

  constructor(private service: GetterBackendService){ }

   ngOnInit(){
    this.service.getAllConti()
    .subscribe(conto => {
      this.conti = conto;
    });
    console.log(this.conti);
}
}
