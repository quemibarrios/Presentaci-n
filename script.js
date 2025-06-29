const placas = document.querySelectorAll('.presentacion');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAnterior = document.getElementById('btnAnterior');
let indiceActual = 0;

function actualizarPresentacion() {
  console.log('Mostrando placa:', indiceActual + 1);
  
  placas.forEach((placa, i) => {
    if(i === indiceActual) {
      placa.classList.add('active');
    } else {
      placa.classList.remove('active');
    }
  });

  // Mostrar u ocultar botones
  if(indiceActual === 0) {
    btnAnterior.style.display = 'none';
  } else {
    btnAnterior.style.display = 'inline-block';
  }

  if(indiceActual === placas.length - 1) {
    btnSiguiente.style.display = 'none';
  } else {
    btnSiguiente.style.display = 'inline-block';
  }

  console.log('Botón Anterior:', btnAnterior.style.display);
  console.log('Botón Siguiente:', btnSiguiente.style.display);
}

btnSiguiente.addEventListener('click', () => {
  if (indiceActual < placas.length - 1) {
    indiceActual++;
    actualizarPresentacion();
  }
});

btnAnterior.addEventListener('click', () => {
  if (indiceActual > 0) {
    indiceActual--;
    actualizarPresentacion();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    if (indiceActual < placas.length - 1) {
      indiceActual++;
      actualizarPresentacion();
    }
  } else if (event.key === 'ArrowLeft') {
    if (indiceActual > 0) {
      indiceActual--;
      actualizarPresentacion();
    }
  }
});

/* actualizarPresentacion(); */