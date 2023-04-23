import { Component } from '@angular/core';
import { Movimenti } from '../movimenti';
import { GetterBackendService } from '../getter-backend.service';

@Component({
  selector: 'app-movimenti-component',
  templateUrl: './movimenti-component.component.html',
  styleUrls: ['./movimenti-component.component.scss']
})
export class MovimentiComponentComponent {

  movimenti : Movimenti[] = [];

  constructor(private service: GetterBackendService){ }

   ngOnInit(){
    this.service.getAllMovimenti()
    .subscribe(movimento => {
      this.movimenti = movimento;
    });
    console.log(this.movimenti);
}

}
