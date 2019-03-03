import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormularioComponent } from './formulario/formulario.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { ApipaisesComponent } from './apipaises/apipaises.component';
import { FormapiComponent } from './formapi/formapi.component';
import { PersonadetallesComponent } from './personadetalles/personadetalles.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'onchangesdemo',  component: OnChangesDemoComponent},
    { path: 'apiPaises', component: ApipaisesComponent},
    { path: 'formapi', component: FormapiComponent},
    { path: 'formapi/detalles/:id', component: PersonadetallesComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
