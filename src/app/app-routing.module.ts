import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MetodologiaComponent } from './pages/metodologia/metodologia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReloadService } from './services/reload.service';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"acerca", component:AcercaComponent},
  {path:"servicios", component:ServiciosComponent},
  {path:"metodologia", component:MetodologiaComponent},
  {path:"contacto", component:ContactoComponent},

  {path:"**", redirectTo:"inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
