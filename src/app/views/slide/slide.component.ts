import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppState } from 'src/app/commons/store/app.state';
import * as TaskActions from 'src/app/commons/store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from 'src/app/commons/models/tio';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuariosComponent } from 'src/app/views/tio/login-usuarios/login-usuarios.component';
import { Location } from "@angular/common";
import { TokenService } from 'src/app/services/token.service';
import { Usertoken } from 'src/app/models/usertoken';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})


export class SlideComponent {
  //@ViewChild(LoginUsuariosComponent) child;

  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  constructor(
    location: Location, 
    private router: Router, 
    //private store: Store<AppState>,
    private tokenService: TokenService) {
      this.tio = new Tio("", "", "");
      //this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const json: string  | null = localStorage.getItem('login');
      if(json != null){
        const usuario:Usertoken = JSON.parse(json);
        if(usuario.nombre != 'error'){
          this.usuariologeado = true;
        }else{
          this.usuariologeado = false; 
          console.log('location')
          //console.log(this.router.url)
          //console.log(this.activatedRoute.url);
          //this.router.navigate(['/login']);
        }
      }
    }
  }
  /* ngAfterViewInit() {
    this.usuariologeado = this.child.usuariologeado
  } */

  get login(){
    return this.tokenService.getUser();
  }

  logout() {
    const usuario: Usertoken = {
      id: 1,
      token:"",
      nombre: "error",
      email: "error@gmail.com",
      role:"",
      status: 404
    }
    this.usuariologeado = false;
    //this.store.dispatch(new TaskActions.InicioUsuario(usuario) )
    this.router.navigate(['/login']);
    this.tokenService.setUser(usuario);
    this.tokenService.logout();
  }

}
