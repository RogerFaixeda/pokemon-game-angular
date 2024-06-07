import { Component, OnInit } from '@angular/core';
import {ServeiJugadorService} from "../servei-jugador.service";

@Component({
  selector: 'app-iniciar-sessio-faixeda',
  templateUrl: './iniciar-sessio-faixeda.component.html',
  styleUrls: ['./iniciar-sessio-faixeda.component.css']
})
export class IniciarSessioFaixedaComponent   implements OnInit {
  nomJugador:any
  score:any

  constructor(private router: Router, private s : ServeiJugadorService) { }

  ngOnInit(): void {
  }
  enviarJuagador () {
    localStorage.setItem("usuariActual", this.nomJugador)
    localStorage.setItem("score", this.score)
    this.s.nomJugador = this.nomJugador;
    this.s.score = this.score;
    this.router.navigate(['./home']);
  }
}
