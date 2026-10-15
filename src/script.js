const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    alert(`¡Gracias por tu mensaje ${nombre}! Tu mensaje ha sido enviado con éxito. Te hablaré a ${email} pronto.`)

    formulario.reset();
})