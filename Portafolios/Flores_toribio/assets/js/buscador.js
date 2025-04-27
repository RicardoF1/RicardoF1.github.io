// buscador.js
function filtrarProyectos(proyectos, query) {
    if (!query) return proyectos; // Si no hay query, retorna todos los proyectos
    const texto = query.toLowerCase(); // Se convierte a minúsculas solo una vez
    return proyectos.filter(p =>
      p.titulo.toLowerCase().includes(texto) // Solo se convierte el título una vez
      || p.descripcion.toLowerCase().includes(texto)
    );
}
module.exports = { filtrarProyectos };