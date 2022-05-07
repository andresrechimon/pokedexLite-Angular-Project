import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Pokemon } from 'src/app/auth/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-static',
  templateUrl: './pokemon-static.component.html',
  styleUrls: ['./pokemon-static.component.scss']
})
export class PokemonStaticComponent implements OnInit, AfterViewInit {
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  pokemonList: Pokemon[] = [];
  displayedColumns: string[] = ['name', 'type', 'evolve', 'actions'];
  dataSource!: MatTableDataSource<any>


  constructor(private ps:PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadPokemons(){
    this.pokemonList = this.ps.getPokemonStatic();
    this.dataSource = new MatTableDataSource(this.pokemonList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(index:number){
    this.ps.deletePokemonStatic(index);
    this.loadPokemons();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Pokemon eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
