export class Serie {
    id:number
    titulo: string;
    productora:string;
    no_temporadas:number;
    descripcion:string;
    link:string;
    logo:string;
    constructor(id:number,titulo: string, productora: string,no_temporadas:number,descripcion:string,link:string,logo:string) {
      this.id = id;
      this.titulo = titulo;    
      this.productora = productora;
      this.no_temporadas = no_temporadas;
      this.descripcion = descripcion;
      this.link = link;
      this.logo = logo;
    }
  }