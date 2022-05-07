import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
    h5{
      font-weight: bolder;
    }

    .main-div mat-card{
      padding: 0px;
    }
    `
  ]
})
export class RegisterComponent{

  constructor(private router:Router) { }

  registerTest(){
    Swal.fire({
      title: '¡Registro de prueba!',
      text: 'Práctica de routing. Presione OK para volver a Login',
      imageUrl: '../../../../assets/img/pikachucoffe.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Pikachu Coffe',
    }).then(() => {
      this.router.navigate(['/auth/login']);
    })
  }
}
