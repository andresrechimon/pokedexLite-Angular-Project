import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    @import "../../../../assets/styles/variables.scss";

    img:hover{
        cursor: pointer;
    }
    
    .spacer{
        flex: 1 1 auto;
    }
    
    .mat-toolbar{
        background-color: $black;
    }
    `
  ]
})
export class HeaderComponent{

  constructor(private router:Router) { }
  home(){
    this.router.navigateByUrl('/template/poke-table');
  }

  logout(){
    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['./auth']);
      }
    })
  }
}
