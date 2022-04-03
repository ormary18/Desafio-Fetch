
const tabla = document.querySelector('#nomina');

function cargarusarios(){
    fetch('nomina.json')
    .then(respuesta => respuesta.json())
    .then(usuarios => {
        usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.Apellido}</td>
        <td>${usuario.direccion}</td>
        <td>${usuario.telefono}</td>
        <td>${usuario.puesto}</td>
    
        `;
tabla.appendChild(row);
            
        });
        
})
.catch(error => console.log('Hubo un error: ' + error.message))
    
    }

cargarusarios();

