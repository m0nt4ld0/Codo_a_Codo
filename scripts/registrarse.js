// Hago fetch para consumir la info de usuarios desde API que hice para el curso
function llamarAPI() {
    const json =
        fetch('http://localhost:8080/webapp-1.0.0-SNAPSHOT/ListarUsuariosController')
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}

async function crearUsuario() {
    var nombreUsuario = document.getElementById('registroNombre').value;
    var apeUsuario = document.getElementById('registroApellido').value;
    var mailUsuario = document.getElementById('registroEmail').value;
    var registroContraseña = document.getElementById('registroContraseña').value;
    //var fnacUsuario = document.getElementById('registroFecha').value;
    var paisUsuario = document.getElementById('registroPais').value;
    
    const jsonRequest = {
        nombreUsuario,
        apeUsuario,
        mailUsuario,
        registroContraseña,
        paisUsuario
    };
    
    // Enviar los datos en formato JSON
    const json = JSON.stringify(jsonRequest);
    //console.log(json);
    
    fetch('http://localhost:8080/webapp-1.0.0-SNAPSHOT/CrearUsuarioController', {
        method: 'POST',
        body: json,
        headers: new Headers({
            'Content-Type': 'text/json'
        })
    });
    

function dibujarDatos(json) {
    const filas = new Map(Object.entries(json));
    var html = '';
    html +=('<table>');
    html +=('<tr><th>ID Usuario</th>');
    html +=('<th>Nombre</th>');
    html +=('<th>Apellido</th>');
    html +=('<th>E-Mail</th>');
    //html +=('<th>Password</th>');
    html +=('<th>Fecha de nacimiento</th>');
    html +=('<th>País de origen</th>');
    html +=('<th>Editar</th>');
    html +=('<th>Eliminar</th></tr>');
    for(f of filas) {
        var fecha = new Date(f[1]["fnacUsuario"] * 1000);
        html +=('<tr>');
        html += ('<td>' + f[1]["idUsuario"] + '</td>');
        html += ('<td><input type="text" id=registroNombre-' + f[1]["idUsuario"] + ' value="' + f[1]["nombreUsuario"] + '"></td>');
        html += ('<td><input type="text" id=registroApellido-' + f[1]["idUsuario"] + ' value="' + f[1]["apeUsuario"] + '"></td>');
        html += ('<td><input type="text" id=registroEmail-' + f[1]["idUsuario"] + ' value="' + f[1]["mailUsuario"] + '"></td>');
        //html += ('<td><input type="password" id=registroContraseña-' + f[1]["registroContraseña"] + '" value="' + f[1]["registroContraseña"] + '"></td>');
        html += ('<td><input type="text" id=registroFecha-' + f[1]["idUsuario"] + ' value="' + fecha.toUTCString() + '"></td>');
        html += ('<td><input type="text" id=registroPais-' + f[1]["idUsuario"] + ' value="' + f[1]["paisUsuario"] + '"></td>');
        html += ('<td><a href="#" onclick="editarUsuario(' + f[1]["idUsuario"] + ')">E</a></td><td><a href="#" onclick="eliminarUsuario(' + f[1]["idUsuario"] + ')">X</a></td>');
        html +=('</tr>');
    }
    html +=('</table>');
    document.getElementById('resultado').innerHTML = html;
}

//llamarAPI();
    
}