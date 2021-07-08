import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

import { Noticia } from './../../global/interfaces/noticia';
import { NoticiaService } from './../../global/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit, AfterViewInit {

  noticias: Array<Noticia> = [];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    console.log('Ya se inicializo el componente');
    this.cargarNoticias();
  }

  ngAfterViewInit() {
    console.log('Ya se cargo el HTML');
  }

  cargarNoticias() {
    console.log('Voy a traer las noticias del servicio...', this.noticiaService);
    this.noticiaService.getNews().then(response => {
      this.noticias = response;
    }).catch(e => {});
  }

}

// Constructor
// OnChanges
// OnInit
// AfterViewInit
// OnDestroy