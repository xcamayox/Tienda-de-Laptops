import { Component, inject } from '@angular/core';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-landing.component',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
wfService= inject(WeatherforecastService);

  climas:any[]=[];

  constructor(){
    this.wfService.obtenerClima().subscribe( datos => {
      this.climas=datos;
    })
  }
}
