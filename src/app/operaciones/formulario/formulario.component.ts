import { Component, OnInit } from '@angular/core';
import { Operacion } from '../operacion.entity';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  url: string = 'https://localhost:7211/api/ts/operacion/v1';

  operacion: Operacion = {
    Id : '',

    ContactoBodega: '' ,

    DireccionBodega: '',

    FechaRetiro: new Date() ,

    NumeroContenedor: '',

    PesoContenedor: 0,

    VolumenCarga: 0,
    
    Carga: [{
      Id : '',
      NumeroCarga: '',
      ValorCarga: '',
    }]
   
  };

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  ingresarOperacion(){

    this.http.post<any>(this.url, this.operacion).subscribe( (resp) =>{
      
      alert(resp.descripcion)

      this.operacion = {
        Id : '',
    
        ContactoBodega: '' ,
    
        DireccionBodega: '',
    
        FechaRetiro: new Date() ,
    
        NumeroContenedor: '',
    
        PesoContenedor: 0,
    
        VolumenCarga: 0,
        
        Carga: [{
          Id : '',
          NumeroCarga: '',
          ValorCarga: '',
        }]
       
      };
    })
  }

}
