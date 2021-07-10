import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint:string = '';

  constructor(private httpClient: HttpClient) { }

  listar(params?: any): Promise<any> {
    params = params ? '&' + params : '';
    const url = `${environment.apiUrl}${this.endpoint}?apiKey=${environment.apiKey}${params}`;
    return this.httpClient.get(url).toPromise();
  }
}

// sortBy=publishedAt&q=algo


// ClasePadre
//   private prop1 
//   protected prop2 
//   public prop3
  
//   claseHija
//     private hProp1
//     protected hProp2
//     public hProp3 


// obj = new claseHija

// obj.prop3 
// obj.hProp3