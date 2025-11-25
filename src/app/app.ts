import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ['Chipiona', 'Matalascañas', 'Caleta', 'Mazagon', 'Bolonia'];

  public notas: number[] = [2, 3, 4, 1, 6, 7, 5, 8, 10];

  public edades: number[] = [12, 18, 59, 31, 45, 17, 32, 21, 19, 20];

  public colores : string[] = ['Azul','Rosa','Naranja','Verde','Amarillo','Rojo']

  public playas_pares(): string[] {

    // Programacion Funcional


    // return playas_pares;

    return this.playas.filter((playa, indice) => indice % 2 == 0);
  }

  public mayorNota(): number {
    // Forma funcional

    return this.notas.reduce((Notamax, Nota_actual) => Nota_actual > Notamax ? Nota_actual : Notamax);

    // return this.notas.reduce((Notamax, Nota_actual) => Math.max(Notamax, Nota_actual));
  }

  public notaMin(): number {

    return this.notas.reduce((Notamax, Nota_actual) => Nota_actual < Notamax ? Nota_actual : Notamax);

    // return this.notas.reduce((min, numero) => Math.min(min, numero));
  }

  public media_edad(): number {

    //Filtra array de edades y devuelve un array de numeros filtrados
    let edadesFiltradas : number[] = this.edades.filter(edad => edad > 18 && edad < 50);

    //Reduce el array de numeros a un numero que es la media
    let result : number = (edadesFiltradas.reduce((acumulador, edad) => acumulador + edad) / edadesFiltradas.length);

    return Number(result.toFixed(2));
  }

  public elimina_color(color : string) : string[]{
    return this.colores.filter(data => data !== color);
  }
}
