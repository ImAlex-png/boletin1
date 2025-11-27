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

  public diasSemana: Set<string> = new Set();

  public entreSemana: Set<string> = new Set(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]);
  public finde: Set<string> = new Set(["Viernes", "Sabado", "Domingo"]);

  public alumnos: Set<string> = new Set();

  public numeros: Set<string> = new Set();



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

  public rellena_semana(): void {
    //Patron de diseño 'chain'.
    //Un conjunto no contiene duplicados
    this.diasSemana.add("Lunes")
      .add("Martes")
      .add("Miercoles")
      .add("Jueves")
      .add("Viernes")
      .add("Sabado")
      .add("Domingo");
  }


  public unir_conjunto(): void {
    // ' ... ' Es un operador que me da los valores del array donde solo cabe un valor. Devuelve la secuencia de elementos que tiene dentro del array

    //En un conjunto, no mete duplicados

    //Union, mete todo

    //Interseccion, solo lo comun en ambos

    // 'Lunes','Martes','Miercoles','Jueves','Viernes',['Sabado', 'Domingo']

    // this.diasSemana = new Set(...this.entreSemana, this.finde);

    // 'Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'
    this.diasSemana = new Set([...this.entreSemana, ...this.finde]);
  }


  public operar_conjunto(opt: number): void {
    switch (opt) {
      case 1:
        this.add_to_set();
        console.log(this.alumnos);
        break;
      case 2:
        this.delete_from_set();
        console.log(this.alumnos);
        break;
      case 3:
        let estaXexu: boolean = this.find_in_set("Xexu");
        let estaSalva: boolean = this.find_in_set("Salvador");
        console.log("El alumno xexu esta?: " + estaXexu);
        console.log("El alumno xexu esta?: " + estaSalva);
        break;
      case 4:
        let tam: number = this.count_set();
        console.log("El conjunto tiene: " + tam + " elementos")
        break;
    }
  }

  private add_to_set(): void {
    this.alumnos.add("Pedro").add("Salvador").add("Maria").add("Juan").add("Sara")
  }

  private delete_from_set(): void {
    this.alumnos.delete("Maria");
  }

  private find_in_set(alumno: string): boolean {
    return this.alumnos.has(alumno);
  }

  private count_set(): number {
    return this.alumnos.size;
  }

  public elimina_duplicados(): string[] {
    let coloresDuplicados: string[] = [
      'Azul',
      'Rosa',
      'Naranja',
      'Verde',
      'Amarillo',
      'Rojo',
      'Azul',      // duplicado
      'Verde',     // duplicado
      'Rojo',      // duplicado
      'Rosa',      // duplicado
      'Naranja',
      'Amarillo'   // duplicado
    ];


    let conjunto_elementos: Set<string> = new Set(coloresDuplicados);

    let listaSinRepetidos = [...conjunto_elementos];

    return listaSinRepetidos;
  }

  public ej14(): Set<string> {

    let del1al10: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    let del5al15: string[] = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

    let del10al20: string[] = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

    return this.numeros = new Set([...del1al10, ...del5al15, ...del10al20]);
  }

  public listin_telefonico(): Map<string, string> {
    let listin: Map<string, string> = new Map();

    listin.set("Juan", "600111666");
    listin.set("Alberto", "640311596");
    listin.set("Pepe", "640311596");
    
    console.table(listin);


    return listin;
  }

}
