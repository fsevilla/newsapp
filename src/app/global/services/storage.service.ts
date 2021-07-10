import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(data: any) {
    localStorage.setItem('selected-news', JSON.stringify(data));
  }

  get(): any {
    let value = localStorage.getItem('selected-news') || '{}';
    return JSON.parse(value);
  }
}
