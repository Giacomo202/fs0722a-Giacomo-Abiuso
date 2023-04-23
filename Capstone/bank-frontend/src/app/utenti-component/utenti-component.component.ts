import { Component, OnInit } from '@angular/core';
import { GetterBackendService } from '../getter-backend.service';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-utenti-component',
  templateUrl: './utenti-component.component.html',
  styleUrls: ['./utenti-component.component.scss']
})
export class UtentiComponentComponent implements OnInit{

  utenti : Utenti[] = [];

  constructor(private service: GetterBackendService){ }

   ngOnInit(){
    this.service.getAllUtenti()
    .subscribe(utente => {
      this.utenti = utente;
    });
    console.log(this.utenti);

}



}
