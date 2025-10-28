import { Component, inject, Input, input, numberAttribute, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.models';
import { Router } from '@angular/router';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';

@Component({
  selector: 'app-editar-producto',
  imports: [FormularioProductoComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
@Input({transform: numberAttribute})
  id!:number

laptopService= inject(LaptopService);
router= inject(Router);
modelo?:Laptop;

ngOnInit(): void {
  this.laptopService.obtenerPorId(this.id).subscribe(laptop=>{
    this.modelo=laptop;
  });
}

guardarCambios(laptop:Laptop){
  this.laptopService.actualizar(this.id,laptop).subscribe(()=>{
    this.router.navigate(['/productos']);
  })
}


}
