document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Obtén todos los elementos del formulario
    var form = this;
    var isValid = true;

    // Validar nombre
    var nombre = document.getElementById('registroNombre');
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      isValid = false;
    } else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }

    // Validar apellido
    var apellido = document.getElementById('registroApellido');
    if (apellido.value.trim() === '') {
      apellido.classList.add('is-invalid');
      isValid = false;
    } else {
      apellido.classList.remove('is-invalid');
      apellido.classList.add('is-valid');
    }

    // Validar email
    var email = document.getElementById('registroEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // Validar contraseña
    var contraseña = document.getElementById('registroContraseña');
    if (contraseña.value.length < 8) {
      contraseña.classList.add('is-invalid');
      isValid = false;
    } else {
      contraseña.classList.remove('is-invalid');
      contraseña.classList.add('is-valid');
    }

    // Validar fecha
    var fecha = document.getElementById('registroFecha');
    if (!fecha.value) {
      fecha.classList.add('is-invalid');
      isValid = false;
    } else {
      fecha.classList.remove('is-invalid');
      fecha.classList.add('is-valid');
    }

    // Validar país
    var pais = document.getElementById('registroPais');
    if (!pais.value) {
      pais.classList.add('is-invalid');
      isValid = false;
    } else {
      pais.classList.remove('is-invalid');
      pais.classList.add('is-valid');
    }

    // Validar términos y condiciones
    var terminos = document.getElementById('terminosCheck');
    if (!terminos.checked) {
      terminos.classList.add('is-invalid');
      isValid = false;
    } else {
      terminos.classList.remove('is-invalid');
      terminos.classList.add('is-valid');
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }
  });