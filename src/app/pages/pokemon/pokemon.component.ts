import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  pokemonImage: string = '';

  // ngOnInit() {
  //   this.getAbilityWithFetch();
  // }

  // getAbilityWithFetch() {
  //   fetch('https://pokeapi.co/api/v2/pokemon/3/')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.pokemonImage = data.sprites.front_default;
  //       console.log('Fetch:', data)
  //     })
  //     .catch(error => console.error('Error con Fetch:', error));
  // }



  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAbilityWithAsyncAwait();
  }

  async getAbilityWithAsyncAwait() {
    try {
      const data : any = await this.http.get('https://pokeapi.co/api/v2/pokemon/3/').toPromise();
      this.pokemonImage = data.sprites.front_default;
      console.log('Async/Await:', data);
    } catch (error) {
      console.error('Error con Async/Await:', error);
    }
  }


}
