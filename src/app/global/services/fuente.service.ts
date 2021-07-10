import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FuenteService extends CrudService {

  endpoint: string = 'top-headlines/sources';

  // constructor(httpClient: HttpClient) {
  //   super(httpClient);
  // }
}


// ${environment.apiUrl}${path}