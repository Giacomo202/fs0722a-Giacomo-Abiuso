import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FattiComponent } from './fatti/fatti.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path:'lista', component:ListaComponent,},
  {path:'fatti', component:FattiComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
