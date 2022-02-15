import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {

  pokemonNom: string = '';
  pokemonImg: string = '';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.pokemonNom = '';
  }


  displayPokemon(idPokemon: string) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + idPokemon).subscribe((data: any) => {

      this.pokemonNom =  data['species']['name'];
      this.pokemonImg = data['sprites']['front_default'];
    })
  }
}
