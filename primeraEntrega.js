class Usuario {
    constructor(
      nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
    addMascota(nombre) {
      this.mascotas.push(nombre);
    }
    countMascotas() {
      return this.mascotas.length;
    }
    addBook(nombre, autor) {
      this.libros.push({
        nombre: nombre,
        autor: autor
      });
    }
    getBookNames() {
      return this.libros.map(function(libro) {
        return libro.nombre
      })
    }
  }
  
  let nombre = 'Pia';
  let apellido = 'del Valle';
  const libros = [];
  const mascotas = [];
  let usuario = new Usuario (nombre,apellido,libros,mascotas);
  usuario.addMascota('Berlin');
  usuario.addBook('Rayuela', 'Julio Cortazar');
  usuario.addBook('Cuentos de la selva', 'Horacio Quiroga');
  
  console.log('FULL NAME:', usuario.getFullName());
  console.log('Mascotas:', usuario.countMascotas());
  console.log('LIBROS:', usuario.getBookNames());