import { NgModule } from '@angular/core';
//MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
   MatButtonModule ,
   MatCardModule,  
   MatChipsModule,
   MatFormFieldModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   MatPaginatorModule,
   MatSortModule,
   MatTableModule,
   MatToolbarModule, 
   MatTooltipModule 
  ],
  exports: [
   MatButtonModule ,
   MatCardModule,  
   MatChipsModule,
   MatFormFieldModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   MatPaginatorModule,
   MatSortModule,
   MatTableModule,
   MatToolbarModule, 
   MatTooltipModule 
  ]
})
export class MaterialModule {}