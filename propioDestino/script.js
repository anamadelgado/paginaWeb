document.querySelectorAll('.number-line div').forEach((div, index) => {
    div.addEventListener('click', () => {
       document.querySelector('.small-image').src = `ruta-de-la-imagen-${index + 1}`;
       // Aquí puedes actualizar las explicaciones de las fotos si es necesario
    });
   });