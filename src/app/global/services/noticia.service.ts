import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient:HttpClient) { }

  listar(search: string, source: string): Promise<any> {
    const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&sources=${source}&apiKey=${environment.apiKey}`;
    // const url = 'https://newsapi.org/v2/everything?q=' + search + '&sortBy=publishedAt&sources=' + source + '&apiKey=59a12e101caf4769b2cf2cb82b677ef3';

    return this.httpClient.get(url).toPromise();
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
