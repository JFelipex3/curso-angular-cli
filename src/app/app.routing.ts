import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent} from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:page', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingPrividers: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
