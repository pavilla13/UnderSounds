// generos.js

const generos = [
    {
      id: 'rock',
      name: 'Rock',
      image: 'static/images/rock.jpeg',
      description: 'El Rock es un género musical que se caracteriza por su energía, guitarras potentes y actitud rebelde.',
      url: '/generos_especifico?id=rock'
    },
    {
      id: 'pop',
      name: 'Pop',
      image: 'static/images/pop.jpeg',
      description: 'El Pop es un género musical orientado a un público masivo, con melodías pegadizas y ritmos bailables.',
      url: '/generos_especifico?id=pop'
    },
    {
      id: 'electronica',
      name: 'Electrónica',
      image: 'static/images/electro.jpeg',
      description: 'La música electrónica se basa en instrumentos electrónicos y experimentaciones sonoras diversas.',
      url: '/generos_especifico?id=electronica'
    },
    {
      id: 'jazz',
      name: 'Jazz',
      image: 'static/images/jazz.png',
      description: 'El Jazz destaca por la improvisación y la libertad creativa, con fuerte influencia de raíces afroamericanas.',
      url: '/generos_especifico?id=jazz'
    },
    {
      id: 'reggeaton',
      name: 'Reggaeton',
      image: 'static/images/reggaeton.jpeg',
      description: 'El Reggaeton mezcla ritmos caribeños y latinos, con letras urbanas y ritmos muy bailables.',
      url: '/generos_especifico?id=reggeaton'
    },
    {
      id: 'techno',
      name: 'Techno',
      image: 'static/images/techno.jpg',
      description: 'El Techno es un género derivado de la música electrónica, centrado en ritmos repetitivos y atmósferas futuristas.',
      url: '/generos_especifico?id=techno'
    },
    {
      id: 'hiphop',
      name: 'Hip Hop',
      image: 'static/images/hip_hop.jpg',
      description: 'El Hip Hop surge en la cultura urbana, con el rap como principal forma de expresión lírica y el breakdance como baile icónico.',
      url: '/generos_especifico?id=hiphop'
    },
    {
      id: 'salsa',
      name: 'Salsa',
      image: 'static/images/salsa.jpg',
      description: 'La Salsa combina ritmos afrolatinos, con énfasis en la percusión, y es popular para el baile social en Latinoamérica.',
      url: '/generos_especifico?id=salsa'
    }
  ];
  

  document.addEventListener("DOMContentLoaded", () => {
    // ----------------------
    // 1) Llenar el LISTADO de géneros (generos.html)
    // ----------------------
    const genresContainer = document.querySelector('.genres-container');
    if (genresContainer) {
        genresContainer.innerHTML = "";
        generos.forEach((genre) => {
            const card = document.createElement("a");
            card.href = genre.url;
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = genre.image;
            img.alt = genre.name;
            img.classList.add("card-img");

            const caption = document.createElement("div");
            caption.classList.add("card-caption");
            caption.textContent = genre.name;

            card.appendChild(img);
            card.appendChild(caption);
            genresContainer.appendChild(card);
        });
    }

    // ----------------------
    // 2) Mostrar el DETALLE de un género (generos-especifico.html)
    // ----------------------
    const urlParams = new URLSearchParams(window.location.search);
    const genreId = urlParams.get("id");
    if (genreId) {
        const genre = generos.find(g => g.id === genreId);

        if (genre) {
            const nameEl = document.getElementById("genre-name");
            const imageEl = document.getElementById("genre-image");
            const descEl = document.getElementById("genre-description");

            if (nameEl) nameEl.textContent = genre.name;
            if (imageEl) {
                imageEl.src = genre.image;
                imageEl.alt = genre.name;
            }
            if (descEl) descEl.textContent = genre.description;
            cargarCancionesPorGenero(genre.id);
        } else {
            const content = document.getElementById("genre-content");
            if (content) {
                content.innerHTML = "<p>Género no encontrado.</p>";
            }
        }
    }
});

// ----------------------
// 3) Cargar canciones del género
// ----------------------
function cargarCancionesPorGenero(genreName) {
    const songsContainer = document.getElementById("songs-container");
    if (!songsContainer) return;

    songsContainer.innerHTML = ""; // Limpiar contenedor antes de llenarlo

    if (typeof canciones === "undefined") {
        console.error("La variable 'canciones' no está definida.");
        return;
    }

    const songsByGenre = canciones.filter(song => song.genre.toLowerCase() === genreName.toLowerCase());

    if (songsByGenre.length > 0) {
        songsByGenre.forEach(song => {
            const songCard = document.createElement("a");
            songCard.href = song.url;
            songCard.classList.add("card");

            const img = document.createElement("img");
            img.src = song.image;
            img.alt = song.name;
            img.classList.add("card-img");

            const caption = document.createElement("div");
            caption.classList.add("card-caption");
            caption.textContent = song.name;

            songCard.appendChild(img);
            songCard.appendChild(caption);
            songsContainer.appendChild(songCard);
        });
    } else {
        songsContainer.innerHTML = "<p>No hay canciones disponibles para este género.</p>";
    }
}