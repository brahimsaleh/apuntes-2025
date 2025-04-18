import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paisBuscar: string= "";
  paisRecibido: any;
  error=null;
  getPaisesWithFetch(pais: string) {
    fetch(`https://restcountries.com/v3.1/name/${pais}?fulltext=false`)
      .then(response => response.json())
      .then(data => {
      this.paisRecibido = data[ 0]
      this.error=null; 
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error=error;
        this.paisRecibido=null;
        console.error('Error con Fetch:', error)
      });
  }

}
 