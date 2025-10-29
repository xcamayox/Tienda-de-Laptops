import { Component, inject, signal } from '@angular/core';
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
columnasAMostrar =['id','nombre','marca','precio','stock','acciones'];

id=signal(0);
nombre=signal("");


constructor(){

  this.cargarProductos();
}

onFiltrar(){
  this.laptopServ.obtenerPorIdYNombre(this.id(),this.nombre()).subscribe( lap=>{
    this.laptops=lap;
  })
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
