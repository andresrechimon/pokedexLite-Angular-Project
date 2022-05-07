import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/auth/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss']
})
export class PokemonCreateComponent implements OnInit {
  idPokemon: any;
  action:string = 'Crear';

  myForm:FormGroup;

  constructor(private router:Router,
              private fb:FormBuilder,
              private ps:PokemonService,
              private aRoute:ActivatedRoute) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      evolve: ['', Validators.required],
    });
    const idParams = 'id';
    this.idPokemon = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if(this.idPokemon !== undefined){
      this.action = 'Editar';
      this.isEditPokemon();
    }
  }

  addPokemon(){
    const pokemon:Pokemon = {
      name: this.myForm.value.name,
      type: this.myForm.value.type,
      evolve: this.myForm.value.evolve
    }
    this.ps.addPokemonStatic(pokemon);
    Swal.fire(
      '¡Enhorabuena!',
      'Pokemon cargado con éxito.',
      'success'
    )

    if(this.idPokemon !== undefined){
      this.editPokemon(pokemon);
    }else{

    }

    this.router.navigateByUrl('/template/poke-static');
  }

  isEditPokemon(){
    const pokemon:Pokemon = this.ps.getEditPokemonStatic(this.idPokemon);
    this.myForm.patchValue({
      name: pokemon.name,
      type: pokemon.type,
      evolve: pokemon.evolve
    })
  }

  editPokemon(pokemon:Pokemon){
    this.ps.editPokemonStatic(pokemon, this.idPokemon);
  }

  cancel(){
    Swal.fire({
      title: '¿Seguro?',
      text: "Los cambios se perderán...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/template/poke-static');
      }
    })
  }
}
