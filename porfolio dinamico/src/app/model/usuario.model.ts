export class usuario {
  id?: number;
  nombre: String;
  apellido: String;
  abaut: String;
  img: String;

  constructor(nombre: String, apellido: String, abaut: String, img: String) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.abaut = abaut;
    this.img = img;
  }
}
