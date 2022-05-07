import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent{
  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];
  pokemonAbi1 = [];
  pokemonAbi2 = [];
  pokemonForm = [];

  constructor(private activatedRouter: ActivatedRoute,
              private ps: PokemonService,
              private router:Router) {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  getPokemon(id:number) {
    this.ps.getPokemon(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
        this.pokemonAbi1 = res.abilities[0].ability.name;
        this.pokemonAbi2 = res.abilities[1].ability.name;
        this.pokemonForm = res.forms[0].url.slice(39, -1);
      },
      err => {
        console.log(err);
      }
    )
  }

  editDelete(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Nota:',
      text: "'Only the HTTP GET method is available on resources'. Lamentablemente, PokeAPI no dispone de las peticiones que necesito para cumplir con esta parte del desafío, por lo que seguiré con datos estáticos. FUENTE: https://pokeapi.co/docs/v2",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Mostrame!',
      cancelButtonText: 'No, gracias.',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/template/poke-static');
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        return;
      }
    })
  }
}
