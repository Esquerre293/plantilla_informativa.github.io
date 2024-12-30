// Texto a mostrar en el efecto de escritura
const text = "Negocios e Inversiones KL";

// Configuración del bucle y la velocidad de la escritura
let index = 0;
const typingSpeed = 100; // Tiempo en milisegundos entre letras
const typingTextElement = document.getElementById("typing-text");

function typeWriter() {
  if (index < text.length) {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Después de escribir el texto, reiniciamos el proceso para que vuelva a escribir
    setTimeout(() => {
      typingTextElement.innerHTML = ""; // Borramos el texto
      index = 0; // Reiniciamos el índice
      typeWriter(); // Iniciamos nuevamente el bucle
    }, 2000); // Tiempo de espera antes de repetir
  }
}

// Iniciamos el efecto de escritura
typeWriter();

// Añadimos interactividad a los bloques con un cambio de color o expansión al hacer hover
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mouseover', () => {
    block.style.backgroundColor = '#f0f0f0'; // Color más claro al pasar el ratón
    block.style.transform = 'scale(1.05)'; // Aumenta ligeramente el tamaño
  });
  block.addEventListener('mouseout', () => {
    block.style.backgroundColor = '#ffffff'; // Vuelve al color original
    block.style.transform = 'scale(1)'; // Vuelve al tamaño original
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Comprobar si el usuario tiene una preferencia de tema guardada en localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "🌕"; // Cambiar el icono a sol
  } else {
    body.classList.add("light-theme");
    themeToggle.textContent = "🌙"; // Cambiar el icono a luna
  }

  // Añadir evento de clic para alternar entre los temas
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Guardar la preferencia de tema en localStorage
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "🌕"; // Cambiar icono a sol
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙"; // Cambiar icono a luna
    }
  });
});


// Comentarios 

document.getElementById("commentForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const textarea = this.querySelector("textarea");
  const input = this.querySelector("input");
  const commentText = textarea.value.trim();
  const userName = input.value.trim();
  
  if (commentText && userName) {
    const commentList = document.querySelector(".comment-list");
    const noComments = document.querySelector(".no-comments");
    
    // Elimina el mensaje de "no hay comentarios"
    if (noComments) noComments.remove();
    
    // Crea un nuevo comentario
    const comment = document.createElement("p");
    comment.innerHTML = `<strong>${userName}:</strong> ${commentText}`;
    commentList.appendChild(comment);
    
    // Limpia el formulario
    textarea.value = "";
    input.value = "";
  }
});

