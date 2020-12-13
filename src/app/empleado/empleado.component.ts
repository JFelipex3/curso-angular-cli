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

	constructor(){
		this.empleado = new Empleado('David Lopéz', 45, 'Cocinero', true);
		this.trabajadores = [
			new Empleado('Manolo Martinez', 35, 'Administrativo', true),
			new Empleado('Ana Lopéz', 25, 'Cocinera', true),
			new Empleado('Victoria Robles', 36, 'Programador', false)
		];
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}
}