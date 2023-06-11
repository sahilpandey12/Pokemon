import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemons:string[]=[
  'pokemon1',
  'pokemon2',
  'pokemon3',
  'pokemon4',
]
collectedPokemons:string[]=[];

selectPokemon(pokemon:string){
  this.collectedPokemons.push(pokemon);
  this.pokemons.splice(this.pokemons.indexOf(pokemon),1);
}

selectedCollectedPokemon(collectedPokemon:string){
  this.pokemons.push(collectedPokemon);
  this.collectedPokemons.splice(
    this.collectedPokemons.indexOf(collectedPokemon),1
  );
}
}
