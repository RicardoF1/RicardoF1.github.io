const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const puerto = 3000;

// Ruta para exportar los proyectos como JSON
app.get('/json-proyectos', (req, res) => {
  const proyectosPath = path.join(__dirname, 'data', 'proyectos.json');
  
  fs.readFile(proyectosPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
    
    // Parseamos el archivo JSON y lo enviamos como respuesta
    const proyectos = JSON.parse(data);
    res.json(proyectos);
  });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
