import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UtentiComponentComponent } from './utenti-component/utenti-component.component';
import { ContiComponentComponent } from './conti-component/conti-component.component';
import { MovimentiComponentComponent } from './movimenti-component/movimenti-component.component';
import { GetterBackendService } from './getter-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { NuovoUtenteComponentComponent } from './nuovo-utente-component/nuovo-utente-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UtentiComponentComponent,
    ContiComponentComponent,
    MovimentiComponentComponent,
    NuovoUtenteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetterBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
