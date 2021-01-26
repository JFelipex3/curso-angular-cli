import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
	public nombre_componente = 'Componente Empleados';

	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public colorSeleccionado:string;

	constructor(){
		this.empleado = new Empleado('David Lopéz', 45, 'Cocinero', false);
		this.trabajadores = [
			new Empleado('Manolo Martinez', 35, 'Administrativo', true),
			new Empleado('Ana Lopéz', 25, 'Cocinera', true),
			new Empleado('Victoria Robles', 36, 'Programador', false)
		];

		this.trabajador_externo = false;
		this.color = 'red';
		this.colorSeleccionado = '#ccc';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}

	cambiarColor(valor){
		this.color = valor;
	}

	logColorSeleccionado(){
		console.log(this.colorSeleccionado);
	}
}
