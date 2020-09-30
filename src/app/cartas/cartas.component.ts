import { PokemonctgService } from './../pokemonctg.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.sass']
})
export class CartasComponent implements OnInit {

  cartas: Array<any>;

  constructor(private PokemonctgService: PokemonctgService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.PokemonctgService.listar().subscribe(dados => this.cartas = dados);
  }

}
