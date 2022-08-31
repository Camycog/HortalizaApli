import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  data: any;
  ngOnInit() {
  }
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.user; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      }else{this.router.navigate(["/login"])} // Si no tiene extra la navegacion actual navegar al login
    });
  }
}
