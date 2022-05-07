import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Pokemon } from '../auth/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.baseUrl;

  pokemonList: Pokemon[] = [
    {position: 1, name: 'Bulbasaur', type: 'Tierra', evolve: 'Ivysaur, Venusaur'},
    {position: 2, name: 'Charmander', type: 'Fuego', evolve: 'Charmeleon, Charizard'},
    {position: 3, name: 'Squirtle', type: 'Agua', evolve: 'Wartortle, Blastoise'},
    {position: 4, name: 'Caterpie', type: 'Insecto', evolve: 'Metapod, Butterfree'},
    {position: 5, name: 'Weedle', type: 'Insecto', evolve: 'Kakuna, Beedrill'}
  ];

  constructor(private http:HttpClient) { }

  getPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  getPokemonStatic(){
    return this.pokemonList.slice();
  }

  addPokemonStatic(pokemon:Pokemon){
    this.pokemonList.unshift(pokemon);
  }

  getEditPokemonStatic(index:number){
    return this.pokemonList[index];
  }

  editPokemonStatic(pokemon:Pokemon, idPokemon:number){
    this.pokemonList[idPokemon].name = pokemon.name;
    this.pokemonList[idPokemon].type = pokemon.type;
    this.pokemonList[idPokemon].evolve = pokemon.evolve;
  }

  deletePokemonStatic(index:number){
    this.pokemonList.splice(index, 1);
  }
}
