import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemonImage:       string          = '';
  pokemonId:          string | number = '';
  pokemonName:        string          = '';
  pokemonType:        string          = '';
  pokemonDescription: string          = '';
  pokemonImage2:      string          = '';
  mostrarPokemon = false;

  // ngOnInit() {
  //   this.getPokemonWithFetch();
  // }

  getPokemonWithFetch(id: number | string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        this.pokemonImage = data.sprites.front_default;
        this.pokemonName = data.name;
        this.pokemonType = data.types[0].type.name;
        this.pokemonId = data.id;
        this.mostrarPokemon = true;
        this.pokemonImage2 = data.sprites.other.dream_world.front_default
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.mostrarPokemon = false;
        console.error('Error con Fetch:', error)
      });
  }











  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getAbilityWithAsyncAwait();
  // }

  // async getAbilityWithAsyncAwait() {
  //   try {
  //     const data : any = await this.http.get('https://pokeapi.co/api/v2/pokemon/150/').toPromise();
  //     this.pokemonImage = data.sprites.front_default;
  //     console.log('Async/Await:', data);
  //   } catch (error) {
  //     console.error('Error con Async/Await:', error);
  //   }
  // }


}
