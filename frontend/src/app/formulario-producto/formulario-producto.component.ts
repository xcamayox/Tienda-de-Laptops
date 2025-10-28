import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Laptop } from '../laptop.models';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {

 private readonly formBuilder = inject(FormBuilder);

  @Input({required:true})
  titulo!:string;

  @Input()
  modelo?:Laptop;

  @Output()
  posteoFormulario = new EventEmitter<Laptop>();
  //posteoFormulario = new EventEmitter<LaptopCreacion>();

  ngOnInit(): void {
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form= this.formBuilder.group({
    nombre: [''],
    marca:[''],
    precio:0,
    stock:0,
  })

  guardarCambios(){
    let laptop= this.form.value as Laptop;
    //let laptop= this.form.value as LaptopCreacion;
    console.log(laptop);
    this.posteoFormulario.emit(laptop);
  }

}
