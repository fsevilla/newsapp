import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TitularesComponent } from './pages/titulares/titulares.component';
import { Error404Component } from './pages/error404/error404.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetalleNoticiaComponent } from './pages/detalle-noticia/detalle-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    TitularesComponent,
    Error404Component,
    HeaderComponent,
    FooterComponent,
    DetalleNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
