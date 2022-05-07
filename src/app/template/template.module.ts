//ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//MODULES INCORPORATED
import { MaterialModule } from '../material/material.module';
import { TemplateRoutingModule } from './template-routing.module';
//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonStaticComponent } from './components/pokemon-static/pokemon-static.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PokemonCreateComponent,
    PokemonDetailComponent,
    PokemonStaticComponent,
    PokemonTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
