// Inicializa el mapa
function initMap() {
  // La ubicación de Galdakao
  const galdakao = [43.2333, -2.8333];
  // Crear el mapa y establecer la vista inicial
  const map = L.map('map').setView(galdakao, 12);

  // Añadir la capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Añadir un marcador en la ubicación de Galdakao
  L.marker(galdakao).addTo(map)
    .bindPopup('Galdakao')
    .openPopup();
}

// Llama a la función initMap cuando la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', initMap);




// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
}

// Mostrar el botón cuando se desplaza hacia abajo 100px desde la parte superior del documento
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

 }
// Cuando se hace clic en el botón, desplázate hacia la parte superior del documento
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function cambiarImagen(id, nuevaSrc) {
    document.getElementById(id).src = nuevaSrc;
}

function restaurarImagen(id, srcOriginal) {
    document.getElementById(id).src = srcOriginal;
}



