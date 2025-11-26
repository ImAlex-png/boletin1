import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ['Chipiona', 'Matalascañas', 'Caleta', 'Mazagon', 'Bolonia'];

  public notas: number[] = [2, 3, 4, 1, 6, 7, 5, 8, 10];

  public edades: number[] = [12, 18, 59, 31, 45, 17, 32, 21, 19, 20];

  public colores: string[] = ['Azul', 'Rosa', 'Naranja', 'Verde', 'Amarillo', 'Rojo'];

  public frutas: string[] = [
    'Aguacate',
    'Banana',
    'Chirimoya',
    'Dátil',
    'Fresa',
    'Guayaba',
    'Kiwi',
    'Limón',
    'Naranja',
    'Pera',
    'Sandía',
    'Uva',
    'Yuca'
  ];

  public fruta: string = "";

  //Matriz de dos dimensiones ( array de arrays)
  public matriz1: number[][] = this.inicializa_matriz();
  public matriz2: number[][] = this.inicializa_matriz();

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
    let edadesFiltradas: number[] = this.edades.filter(edad => edad > 18 && edad < 50);

    //Reduce el array de numeros a un numero que es la media
    let result: number = (edadesFiltradas.reduce((acumulador, edad) => acumulador + edad) / edadesFiltradas.length);

    return Number(result.toFixed(2));
  }

  public elimina_color(color: string): string[] {
    //Devuelve array filtrado sin modificar ( devuelve copia filtrada )
    return this.colores.filter(data => data !== color);
  }

  public elimina_color_v2(color: string): void {
    //El splice modifica el array original ( modifica array colores original)
    this.colores.splice(this.colores.indexOf(color), 1);
  }

  public insertar_fruta(): void {
    // Buscar donde insertarla
    let encontrado = this.frutas.length;
    for (let i = 0; i < this.frutas.length; i++) {
      if (this.fruta < this.frutas[i]) {
        encontrado = i;
        break;
      }
    }

    //Insertarla directamente ordenada
    this.frutas.splice(encontrado, 0, this.fruta);
  }

  private inicializa_matriz(): number[][] {
    let result: number[][] = [];

    // 3 porque es de tamaño 3 ( recorre filas )
    for (let i = 0; i < 3; i++) {
      let fila: number[] = [];
      for (let j = 0; j < 3; j++) {
        fila.push(0);
      }
      result.push(fila);
    }
    console.log(result);
    return result;
  }

}
