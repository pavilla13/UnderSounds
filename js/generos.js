// generos.js

const generos = [
    {
      id: 'rock',
      name: 'Rock',
      image: 'assets/images/rock.jpeg',
      description: 'El Rock es un género musical que se caracteriza por su energía, guitarras potentes y actitud rebelde.',
      url: 'generos especifico.html?id=rock'
    },
    {
      id: 'pop',
      name: 'Pop',
      image: 'assets/images/pop.jpeg',
      description: 'El Pop es un género musical orientado a un público masivo, con melodías pegadizas y ritmos bailables.',
      url: 'generos especifico.html?id=pop'
    },
    {
      id: 'electronica',
      name: 'Electrónica',
      image: 'assets/images/electro.jpeg',
      description: 'La música electrónica se basa en instrumentos electrónicos y experimentaciones sonoras diversas.',
      url: 'generos especifico.html?id=electronica'
    },
    {
      id: 'jazz',
      name: 'Jazz',
      image: 'assets/images/jazz.png',
      description: 'El Jazz destaca por la improvisación y la libertad creativa, con fuerte influencia de raíces afroamericanas.',
      url: 'generos especifico.html?id=jazz'
    },
    {
      id: 'reggeaton',
      name: 'Reggaeton',
      image: 'assets/images/reggaeton.jpeg',
      description: 'El Reggaeton mezcla ritmos caribeños y latinos, con letras urbanas y ritmos muy bailables.',
      url: 'generos especifico.html?id=reggeaton'
    },
    {
      id: 'techno',
      name: 'Techno',
      image: 'assets/images/techno.jpg',
      description: 'El Techno es un género derivado de la música electrónica, centrado en ritmos repetitivos y atmósferas futuristas.',
      url: 'generos especifico.html?id=techno'
    },
    {
      id: 'hiphop',
      name: 'Hip Hop',
      image: 'assets/images/hip_hop.jpg',
      description: 'El Hip Hop surge en la cultura urbana, con el rap como principal forma de expresión lírica y el breakdance como baile icónico.',
      url: 'generos especifico.html?id=hiphop'
    },
    {
      id: 'salsa',
      name: 'Salsa',
      image: 'assets/images/salsa.jpg',
      description: 'La Salsa combina ritmos afrolatinos, con énfasis en la percusión, y es popular para el baile social en Latinoamérica.',
      url: 'generos especifico.html?id=salsa'
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    // ----------------------
    // 1) Llenar el LISTADO de géneros (generos.html)
    // ----------------------
    const genresContainer = document.querySelector('.genres-container');
    if (genresContainer) {
      // Limpiamos el contenedor por si hay contenido
      genresContainer.innerHTML = "";
      generos.forEach((genre) => {
        const card = document.createElement("a");
        card.href = genre.url;
        card.classList.add("card");
  
        // Creamos la imagen
        const img = document.createElement("img");
        img.src = genre.image;
        img.alt = genre.name;
        img.classList.add("card-img");
  
        // Creamos el pie de foto (caption) y lo ubicamos debajo de la imagen
        const caption = document.createElement("div");
        caption.classList.add("card-caption");
        caption.textContent = genre.name;
  
        card.appendChild(img);
        card.appendChild(caption);
        genresContainer.appendChild(card);
      });
    }
  
    // ----------------------
    // 2) Mostrar el DETALLE de un género (generos especifico.html)
    // ----------------------
    const urlParams = new URLSearchParams(window.location.search);
    const genreId = urlParams.get("id");
    if (genreId) {
      // Estamos en la página de detalle de un género
      const genre = generos.find(g => g.id === genreId);
  
      if (genre) {
        // Rellenamos los elementos del DOM
        const nameEl = document.getElementById("genre-name");
        const imageEl = document.getElementById("genre-image");
        const descEl = document.getElementById("genre-description");
  
        if (nameEl) nameEl.textContent = genre.name;
        if (imageEl) {
          imageEl.src = genre.image;
          imageEl.alt = genre.name;
        }
        if (descEl) descEl.textContent = genre.description;
      } else {
        // Si no se encontró ese ID, mostramos un mensaje de error
        const content = document.getElementById("genre-content");
        if (content) {
          content.innerHTML = "<p>Género no encontrado.</p>";
        }
      }
    }
  });
  