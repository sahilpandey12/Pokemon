import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColletedPokemonComponent } from './components/colleted-pokemon/colleted-pokemon.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ColletedPokemonComponent,
    AllPokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
