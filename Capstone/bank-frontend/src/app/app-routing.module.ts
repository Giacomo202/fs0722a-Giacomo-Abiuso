import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UtentiComponentComponent } from './utenti-component/utenti-component.component';
import { ContiComponentComponent } from './conti-component/conti-component.component';
import { MovimentiComponentComponent } from './movimenti-component/movimenti-component.component';
import { NuovoUtenteComponentComponent } from './nuovo-utente-component/nuovo-utente-component.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'utenti', component: UtentiComponentComponent},
  {path: 'conti', component: ContiComponentComponent},
  {path: 'movimenti', component: MovimentiComponentComponent},
  {path: 'nuovoUtente', component:NuovoUtenteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
