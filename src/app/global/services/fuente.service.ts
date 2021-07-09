import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuenteService {

  constructor(private httpClient: HttpClient) { }

  listar(): Promise<any> {
    const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${environment.apiKey}`;
    return this.httpClient.get(url).toPromise();
  }
}
