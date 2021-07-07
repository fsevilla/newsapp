import { Component } from '@angular/core';

interface Movie {
  title: string;
  description: string;
  duration: number;
  year?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Francisco';

  buscar: string = '';
  seleccionado: boolean = true;

  movies:Array<Movie> = [
    {
      title: 'Transformers',
      description: 'lorem ipsum dolor sit amet',
      duration: 120,
      year: 2007
    },
    {
      title: 'Avengers',
      description: 'pelicula de los vengadores',
      duration: 150
    },
    {
      title: 'Pocahontas',
      description: 'pelicula de pocahontas',
      duration: 63,
      year: 1998
    },
    {
      title: 'Cenicienta',
      description: 'Pelicula de cenicienta',
      duration: 65,
      year: 1992
    },
    {
      title: 'Titanic',
      description: 'Jack se muere',
      duration: 150,
      year: 2000
    }
  ];

  filteredMovies: Array<Movie> = [];


  constructor() {
    // this.nombre = 5;
    // this.nombre = true;
    this.filteredMovies = this.movies;
  }

  search(e?:any) {
    this.filteredMovies = this.movies.filter(item => {
      return item.title.includes(this.buscar);
    });
  }

  triggerSearch(e:any) {
    if(e.key === 'Enter') {
      this.search({});
    }
  }

}
