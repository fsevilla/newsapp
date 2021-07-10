import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

interface Params {
  search: string;
  source: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends CrudService {

  endpoint: string = 'everything';

  listar(params: Params): Promise<any> {
    const query = `q=${params.search}&sortBy=publishedAt&sources=${params.source}`;
    return super.listar(query);
  }

}

// url.com?param=123&param2=valor2&param3=valor3&param4=valor

// Noticia
//   listar
//   obtener por ID 
//   crear 
//   editar
//   eliminar 

// Fuente
//  listar
//  obtener por ID 
//  crear 
//  editar 
//  eliminar 

// Titulares
// listar

// news.service.ts 
//   getNews()
//   getSources()
//   getHeadlines()
