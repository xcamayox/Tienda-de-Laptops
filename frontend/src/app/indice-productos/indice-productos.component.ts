import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.models';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-productos.component',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
laptopServ = inject(LaptopService);
laptops?:Laptop[];
columnasAMostrar =['nombre','acciones'];

constructor(){

  this.cargarProductos();
}

cargarProductos(){
     this.laptopServ.obtenerTodos().subscribe( lap=> {
    this.laptops=lap;
  });

  }

  borrar(id:number){
    this.laptopServ.borrar(id).subscribe(()=>{
      this.cargarProductos();
    })
  }



}
