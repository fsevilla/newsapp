export interface Noticia {
  title: string;
  author: string;
  description: string;
  url: string;
}


export interface RespuestaNoticia {
  author: any;
  articles: Noticia[]
}