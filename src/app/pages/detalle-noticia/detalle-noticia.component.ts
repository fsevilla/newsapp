import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from 'src/app/global/services/storage.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  title: string = '';
  noticia: any;
  cargando: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService) {
    this.activatedRoute.params.subscribe(p => {
      this.title = p.title;
    });
  }

  ngOnInit(): void {
    this.cargando = true;
    setTimeout(() => {
      this.noticia = this.storageService.get();
      this.cargando = false;
    }, 2000);
  }


}
