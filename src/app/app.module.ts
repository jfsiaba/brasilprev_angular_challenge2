import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartasComponent } from './cartas/cartas.component';
import { PokemonctgService } from './pokemonctg.service';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PokemonctgService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
