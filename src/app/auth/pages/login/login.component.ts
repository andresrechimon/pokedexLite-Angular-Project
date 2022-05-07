import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.username = 'trainer';
    this.password = 'password';
  }

  login(){
    if(this.username === 'trainer' && this.password === "password"){
      this.route.navigate(['/template/poke-table']);
    }else if(this.username === 'master' && this.password === "password"){
      this.route.navigate(['/template/poke-table']);
    }else{
      Swal.fire(
        '¿De nuevo, Meowth?',
        'El usuario o la contraseña son incorrectos.',
        'question'
      )
    }
  }

}
