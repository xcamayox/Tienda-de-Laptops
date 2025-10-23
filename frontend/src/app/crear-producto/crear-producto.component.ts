import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { LaptopService } from '../laptop.service';
import { LaptopCreacion } from '../laptop.models';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';


@Component({
  selector: 'app-crear-producto.component',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormularioProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
laptopService= inject(LaptopService);
router = inject(Router)

guardarCambios(laptop:LaptopCreacion){
  this.laptopService.crear(laptop).subscribe( ()=>{
    this.router.navigate(["productos"]
    )
  })
}

}
