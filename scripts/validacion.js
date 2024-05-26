
// Validar textos
function esTextoValido(idCampoTexto) {
    const campo = document.getElementById(idCampoTexto);
    if (campo.value.trim() === '') {
      return false;
    }
    return true;
}

// Validar email
function esEmailValido(idCampoEmail) {
    const email = document.getElementById(idCampoEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!esTextoValido(idCampoEmail))
        return false;
    if (!emailPattern.test(email.value)) {
      return false;
    }
    return true;
}

// Validar contraseña
function esPasswordValida(idCampoPassword) {
    const contraseña = document.getElementById(idCampoPassword);
    if (contraseña.value.length < 8) {
      return false;
    } 
    return true;
}

// Validar fecha, pais
function esSeleccionValida(idCampoSeleccion) {
    const fecha = document.getElementById(idCampoSeleccion);
    if (!fecha.value) {
        return false;
    } 
    return true;
}

function esCheckboxSeleccionado(idCampoCheckbox) {
    const chk = document.getElementById(idCampoCheckbox);
    return (chk.checked);
}

function validarFormulario() {
    var esFormValido = true;
    
    //  Atrapar todos los INPUT y segun su tipo, llamar a una u otra funcion validadora
    var camposInput = document.getElementsByTagName('input');
    for (let i = 0; i < camposInput.length; i++) {
        var esValido = true;
        var id = camposInput[i].id;
        var elemento = document.getElementById(id);
        var tipo = camposInput[i].type.toLowerCase();
        // Limpio las clases de Bootstrap que muestran ayuda al usuario al completar un campo
        elemento.classList.remove('is-invalid');
        elemento.classList.remove('is-valid');
        switch(tipo) {
            case 'text':
                esValido = esTextoValido(id);
            break;
            case 'email':
                esValido = esEmailValido(id);
            break;
            case 'password':
                esValido = esPasswordValida(id);
            break;
            case 'checkbox':
                esValido = esCheckboxSeleccionado(id);
            break;
        }
        // Asigno clase que corresponda, según valor introducido válido o no
        if(!esValido) {
            elemento.classList.add('is-invalid');
            esFormValido = false;
        } else {
            elemento.classList.add('is-valid');
        }
    }

    //  Atrapar todos los SELECT y validar si hay seleccion
    var camposSelect = document.getElementsByTagName('select');
    for (let i = 0; i < camposSelect.length; i++) {
        var id = camposSelect[i].id;
        var elemento = document.getElementById(id);
        elemento.classList.remove('is-invalid');
        elemento.classList.remove('is-valid');
        if(!esSeleccionValida(id)) {
            elemento.classList.add('is-invalid');
            esFormValido = false;
        } else {
            elemento.classList.add('is-valid');
        }
    }

    return esFormValido;
}

function validarFormulario2(idFormulario) {
    document.getElementById(idFormulario).addEventListener('submit', function(event) {
        var form = this;
        
        if (!esValido) {
            event.preventDefault();
            event.stopPropagation();
          }
    })
};