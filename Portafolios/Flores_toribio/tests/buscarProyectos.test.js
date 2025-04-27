// /tests/buscarProyectos.test.js
const { filtrarProyectos } = require("../assets/js/buscador");

describe("filtrarProyectos", () => {
    const mockProyectos = [
        { titulo: "Portafolio", descripcion: "Hecho con HTML y CSS"  },  //Añadimos la descripción
        { titulo: "Ecoambiental", descripcion: "Proyecto de prácticas"  }
      ];
    
      test("filtra por título", () => {
        const resultado = filtrarProyectos(mockProyectos,'eco');
        expect(resultado.length).toBe(1);
        expect(resultado[0].titulo).toBe("Ecoambiental");
      });
      
      test("filtra por descripción", () => {                           //Generamos la nueva prueba
        const resultado = filtrarProyectos(mockProyectos, "HTML");
        expect(resultado.length).toBe(1);
        expect(resultado[0].titulo).toBe("Portafolio");
      });

      test("Retorna vacío si no hay coincidencias", () => {         //Generamos la prueba de no coincidencias
        const resultado = filtrarProyectos(mockProyectos, "java");
        expect(resultado.length).toBe(0);
      });
});