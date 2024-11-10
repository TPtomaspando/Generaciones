class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generacion Z";
      rasgo = "Irreverencia";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generacion Y";
      rasgo = "Frustracion";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generacion X";
      rasgo = "Obsesion por el exito";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambicion";
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Desconocida";
      rasgo = "Desconocido";
    }
    return `Perteneces a la ${generacion} y su rasgo característico es la ${rasgo}.`;
  }

  MayorDeEdad() {
    if (this.edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "es menor de edad";
    }
  }

  mostrarDatos() {
    return `
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.DNI}
      Sexo: ${this.sexo}
      Peso: ${this.peso} kg
      Altura: ${this.altura} m
      Año de nacimiento: ${this.anioNacimiento}
    `;
  }
}

let persona;

document.getElementById("crearPersonaBtn").addEventListener("click", () => {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(
    document.getElementById("añoNacimiento").value
  );

  // Crear el objeto Persona
  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

  // Habilitar los botones de acción
  document.getElementById("mostrarGeneracionBtn").disabled = false;
  document.getElementById("esMayorDeEdadBtn").disabled = false;
  document.getElementById("mostrarDatosBtn").disabled = false;

  alert("Persona creada exitosamente.");
});

// Botón para mostrar la generación de la persona
document
  .getElementById("mostrarGeneracionBtn")
  .addEventListener("click", () => {
    alert(persona.mostrarGeneracion());
  });

// Botón para verificar si es mayor de edad
document.getElementById("esMayorDeEdadBtn").addEventListener("click", () => {
  alert(persona.MayorDeEdad());
});

// Botón para mostrar todos los datos de la persona
document.getElementById("mostrarDatosBtn").addEventListener("click", () => {
  alert(persona.mostrarDatos());
});
