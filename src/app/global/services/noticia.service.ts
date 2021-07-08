import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticias = [
    {
      title: 'Noticia 1',
      url: 'http://google.com'
    },
    {
      title: 'Noticia 2',
      url: 'http://google.com'
    }
  ]

  constructor() { }

  getNews(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.noticias);
      }, 2000);
    });
  }

}
