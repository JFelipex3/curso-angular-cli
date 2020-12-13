import { Component } from "@angular/core";

@Component({
	selector: 'fruta-tag',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente de Frutas';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandía';

	public nombre:String;
	public edad:number;
	public mayorEdad:boolean;
	//any para cualquier tipo de dato, también se le puede asociar String, number, etc
	public trabajos:Array<any> = ['Informático', 'Mecánico Automótriz', 18];
	public comodin:any = 18;

	//Definir un constructor
	constructor(){
		console.log(this.trabajos); //obtiene el valor de la propiedad trabajos
		this.nombre = 'JFelipex3'; //asignar valor a propiedades en el constructor. Se hace así por buena práctica.
		this.edad = 30;
		this.mayorEdad = true;
	}

	//Es lo primero que se carga después del constructor
	ngOnInit(){
		this.holaMundo(this.nombre); //Invoca a la función holaMundo(nombre), se debe hacer así por buena práctica.

		//Variables y Alcances
		var uno = 8;
		var dos = 15; //El alcance es en todo ambito.

		console.log("Variable uno antes del IF: " + uno);
		console.log("Variable dos antes del IF: " + dos);

		if (uno === 8){
			let uno = 3; //El alcance es solo dentro del bloque
			var dos = 88;

			console.log("Dentro del IF, imprime valor variable uno con let: " + uno);
			console.log("Variable dos dentro del IF: " + dos);
		}

		console.log("Fuera del IF, imprime valor variable uno con var: " + uno);
		console.log("Variable dos después del IF: " + dos);
	}

	//Declarar una función
	holaMundo(nombre){
		console.log('Hola Mundo!' + nombre);
	}
}