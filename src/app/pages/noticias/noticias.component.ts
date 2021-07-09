import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

import { Noticia } from './../../global/interfaces/noticia';
import { NoticiaService } from './../../global/services/noticia.service';
import { FuenteService } from './../../global/services/fuente.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit, AfterViewInit {

  buscar: string = '';
  fuenteSeleccionada: string = '';
  noticias: Array<Noticia> = [];
  fuentes: Array<any> = [];

  constructor(private noticiaService: NoticiaService, private fuenteService: FuenteService) {}

  ngOnInit(): void {
    console.log('Ya se inicializo el componente');
    this.cargarFuentes();
  }

  ngAfterViewInit() {
    console.log('Ya se cargo el HTML');
  }

  cargarNoticias() {
    if(!this.buscar) return;
    console.log('Voy a traer las noticias del servicio...', this.noticiaService);
    this.noticiaService.listar(this.buscar, this.fuenteSeleccionada).then(response => {
      this.noticias = response.articles;
    }).catch(e => {});
  }

  cargarFuentes() {
    this.fuenteService.listar().then(response => {
      this.fuentes = response.sources;
    }).catch(e => {});
  }

}

// Constructor
// OnChanges
// OnInit
// AfterViewInit
// OnDestroy
