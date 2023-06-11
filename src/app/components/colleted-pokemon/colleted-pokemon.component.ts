import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-colleted-pokemon',
  templateUrl: './colleted-pokemon.component.html',
  styleUrls: ['./colleted-pokemon.component.scss']
})
export class ColletedPokemonComponent{
 @Input('collectedPokemon') collectedPokemons:string[] = [];
 @Output('select') select= new EventEmitter();

 selectColletedPokemon(collectedPokemon:string){
  this.select.emit(collectedPokemon);
 }
}
