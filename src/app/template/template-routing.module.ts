//MODULES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonStaticComponent } from './components/pokemon-static/pokemon-static.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';

const routes: Routes = [
  {path: 'poke-create', component: PokemonCreateComponent},
  {path: 'poke-detail/:id', component: PokemonDetailComponent},
  { path: 'poke-edit/:id', component: PokemonCreateComponent },
  {path: 'poke-static', component: PokemonStaticComponent},
  {path: 'poke-table', component: PokemonTableComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
