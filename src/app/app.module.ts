import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { TestChanges2Component } from './test-changes2/test-changes2.component';
import { BotonEventComponent } from './boton-event/boton-event.component';
import { ApipaisesComponent } from './apipaises/apipaises.component';
import { FormapiComponent } from './formapi/formapi.component';
import { PersonadetallesComponent } from './personadetalles/personadetalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    OnChangesDemoComponent,
    TestChanges2Component,
    BotonEventComponent,
    ApipaisesComponent,
    FormapiComponent,
    PersonadetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
