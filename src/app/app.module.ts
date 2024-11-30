import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MetodologiaComponent } from './pages/metodologia/metodologia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavComponent } from './components/nav/nav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';

import { CarouselModule } from '@coreui/angular';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TouchClickDirective } from './touch-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    ServiciosComponent,
    MetodologiaComponent,
    ContactoComponent,
    NavComponent,
    FooterComponent,
    TouchClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
