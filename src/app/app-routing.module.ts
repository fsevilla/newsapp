import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TitularesComponent } from './pages/titulares/titulares.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleNoticiaComponent } from './pages/detalle-noticia/detalle-noticia.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:title', component: DetalleNoticiaComponent },
  { path: 'titulares', component: TitularesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
