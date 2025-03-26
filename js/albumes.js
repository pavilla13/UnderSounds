// albumes.js

// ----------------------
// Arreglo de álbumes
// ----------------------
const albumes = [
  {
    id: 1,
    name: "A Night at the Opera",
    artist: "Queen",
    genre: "Rock",
    image: "assets/images/opera.jpeg",
    description: "Lanzado en 1975, este álbum incluye temas icónicos como 'Bohemian Rhapsody'.",
    url: "album.html?id=1",
    tracks: [
      { id: 1, title: "Death on Two Legs", duration: "3:43" },
      { id: 2, title: "Lazing on a Sunday Afternoon", duration: "1:08" },
      { id: 3, title: "I'm in Love with My Car", duration: "3:05" },
      { id: 4, title: "You're My Best Friend", duration: "2:50" },
      { id: 5, title: "'39", duration: "3:25" },
      { id: 6, title: "Bohemian Rhapsody", duration: "5:55" }
    ]
  },
  {
    id: 2,
    name: "After Hours",
    artist: "The Weeknd",
    genre: "Pop",
    image: "assets/images/afterhours.jpeg",
    description: "Publicado en 2020, consolidó a The Weeknd como un referente del pop y R&B contemporáneo.",
    url: "album.html?id=2",
    tracks: [
      { id: 1, title: "Alone Again", duration: "4:10" },
      { id: 2, title: "Too Late", duration: "3:59" },
      { id: 3, title: "Hardest To Love", duration: "3:31" }
    ]
  },
  // ... (los demás álbumes existentes)
  {
    id: 3,
    name: "X 100pre",
    artist: "Bad Bunny",
    genre: "Reggaetón",
    image: "assets/images/x100pre.jpeg",
    description: "Álbum debut de Bad Bunny, lanzado en 2018, con el que redefinió el reggaetón moderno.",
    url: "album.html?id=3",
    tracks: [
      { id: 1, title: "NI BIEN NI MAL", duration: "3:56" },
      { id: 2, title: "200 MPH", duration: "2:50" },
      { id: 3, title: "¿Quién Tú Eres?", duration: "2:39" }
    ]
  },
  {
    id: 4,
    name: "Nothing But The Beat",
    artist: "David Guetta",
    genre: "Electrónica",
    image: "assets/images/nothingbutthebeat.jpeg",
    description: "Publicado en 2011, cuenta con colaboraciones de destacados artistas del pop y la electrónica.",
    url: "album.html?id=4",
    tracks: [
      { id: 1, title: "Where Them Girls At", duration: "3:14" },
      { id: 2, title: "Little Bad Girl", duration: "3:11" },
      { id: 3, title: "Turn Me On", duration: "3:19" },
      { id: 4, title: "Sweat", duration: "3:16" },
      { id: 5, title: "Without You", duration: "3:08" }
    ]
  },
  {
    id: 5,
    name: "Parachutes",
    artist: "Coldplay",
    genre: "Rock",
    image: "assets/images/parachutes.jpg",
    description: "Álbum debut de Coldplay (2000), reconocido por el éxito mundial 'Yellow'.",
    url: "album.html?id=5",
    tracks: [
      { id: 1, title: "Don't Panic", duration: "2:17" },
      { id: 2, title: "Shiver", duration: "4:59" },
      { id: 3, title: "Spies", duration: "5:18" },
      { id: 4, title: "Sparks", duration: "3:47" },
      { id: 5, title: "Yellow", duration: "4:27" }
    ]
  },
  {
    id: 6,
    name: "Future Nostalgia",
    artist: "Dua Lipa",
    genre: "Pop",
    image: "assets/images/futuro.jpeg",
    description: "Lanzado en 2020, destaca el estilo dance-pop fresco que impulsó la fama de Dua Lipa.",
    url: "album.html?id=6",
    tracks: [
      { id: 1, title: "Future Nostalgia", duration: "3:04" },
      { id: 2, title: "Don't Start Now", duration: "3:03" },
      { id: 3, title: "Cool", duration: "3:29" },
      { id: 4, title: "Physical", duration: "3:42" },
      { id: 5, title: "Levitating", duration: "3:23" }
    ]
  },
  {
    id: 7,
    name: "Vibras",
    artist: "J Balvin",
    genre: "Reggaetón",
    image: "assets/images/vibras.jpeg",
    description: "Estrenado en 2018, fusiona ritmos latinos con un sonido urbano moderno.",
    url: "album.html?id=7",
    tracks: [
      { id: 1, title: "Vibras", duration: "3:09" },
      { id: 2, title: "Mi Gente", duration: "3:05" },
      { id: 3, title: "Ahora", duration: "3:14" },
      { id: 4, title: "Ambiente", duration: "4:08" },
      { id: 5, title: "Brillo", duration: "3:15" }
    ]
  },
  {
    id: 8,
    name: "18 Months",
    artist: "Calvin Harris",
    genre: "Electrónica",
    image: "assets/images/18months.jpg",
    description: "Disco de 2012 que llevó a Calvin Harris al estrellato con colaboraciones pop y EDM.",
    url: "album.html?id=8",
    tracks: [
      { id: 1, title: "Green Valley", duration: "1:49" },
      { id: 2, title: "Bounce", duration: "3:42" },
      { id: 3, title: "Feel So Close", duration: "3:26" },
      { id: 4, title: "We Found Love", duration: "3:35" },
      { id: 5, title: "Sweet Nothing", duration: "3:32" }
    ]
  },
  {
    id: 9,
    name: "The Colour and the Shape",
    artist: "Foo Fighters",
    genre: "Rock",
    image: "assets/images/thecolourandtheshape.jpg",
    description: "Álbum de 1997 que contiene éxitos como 'Everlong', catapultando a la banda de Dave Grohl.",
    url: "album.html?id=9",
    tracks: [
      { id: 1, title: "Doll", duration: "1:23" },
      { id: 2, title: "Monkey Wrench", duration: "3:51" },
      { id: 3, title: "Hey, Johnny Park!", duration: "4:08" },
      { id: 4, title: "My Poor Brain", duration: "3:33" },
      { id: 5, title: "Everlong", duration: "4:10" }
    ]
  },
  {
    id: 10,
    name: "Dangerous Woman",
    artist: "Ariana Grande",
    genre: "Pop",
    image: "assets/images/dangerouswoman.jpeg",
    description: "Lanzado en 2016, mezclando pop, R&B y dance, consolidando a Ariana como estrella global.",
    url: "album.html?id=10",
    tracks: [
      { id: 1, title: "Moonlight", duration: "3:22" },
      { id: 2, title: "Dangerous Woman", duration: "3:55" },
      { id: 3, title: "Be Alright", duration: "2:58" },
      { id: 4, title: "Into You", duration: "4:04" },
      { id: 5, title: "Side to Side", duration: "3:46" }
    ]
  },
  {
    id: 11,
    name: "KG0516",
    artist: "Karol G",
    genre: "Reggaetón",
    image: "assets/images/kg0516.jpeg",
    description: "Estrenado en 2021, se convirtió en un éxito comercial y crítico del género urbano.",
    url: "album.html?id=11",
    tracks: [
      { id: 1, title: "Déjalos Que Miren", duration: "3:27" },
      { id: 2, title: "El Makinon", duration: "3:09" },
      { id: 3, title: "200 Copas", duration: "3:18" },
      { id: 4, title: "Contigo Voy a Muerte", duration: "3:42" },
      { id: 5, title: "Bichota", duration: "2:58" }
    ]
  },
  {
    id: 12,
    name: "A Town Called Paradise",
    artist: "Tiësto",
    genre: "Electrónica",
    image: "assets/images/atowncalledparadise.jpg",
    description: "Álbum de 2014 que muestra el lado más mainstream del icónico DJ neerlandés.",
    url: "album.html?id=12",
    tracks: [
      { id: 1, title: "Red Lights", duration: "4:22" },
      { id: 2, title: "Footprints", duration: "3:28" },
      { id: 3, title: "Light Years Away", duration: "3:35" },
      { id: 4, title: "A Town Called Paradise", duration: "4:08" },
      { id: 5, title: "Written in Reverse", duration: "4:28" }
    ]
  },
  {
    id: 13,
    name: "AM",
    artist: "Arctic Monkeys",
    genre: "Rock",
    image: "assets/images/am.jpg",
    description: "Lanzado en 2013, es uno de los trabajos más aclamados de la banda británica.",
    url: "album.html?id=13",
    tracks: [
      { id: 1, title: "Do I Wanna Know?", duration: "4:32" },
      { id: 2, title: "R U Mine?", duration: "3:21" },
      { id: 3, title: "One for the Road", duration: "3:26" },
      { id: 4, title: "Arabella", duration: "3:27" },
      { id: 5, title: "Why'd You Only Call Me When You're High?", duration: "2:41" }
    ]
  },
  {
    id: 14,
    name: "Harry's House",
    artist: "Harry Styles",
    genre: "Pop",
    image: "assets/images/harryshouse.jpeg",
    description: "Publicado en 2022, este álbum reafirma la versatilidad y estilo personal del ex One Direction.",
    url: "album.html?id=14",
    tracks: [
      { id: 1, title: "Music for a Sushi Restaurant", duration: "3:13" },
      { id: 2, title: "Late Night Talking", duration: "2:57" },
      { id: 3, title: "Grapejuice", duration: "3:11" },
      { id: 4, title: "As It Was", duration: "2:47" },
      { id: 5, title: "Satellite", duration: "3:38" }
    ]
  },
  {
    id: 15,
    name: "Vice Versa",
    artist: "Rauw Alejandro",
    genre: "Reggaetón",
    image: "assets/images/viceversa.jpeg",
    description: "Estrenado en 2021, demuestra la mezcla de ritmos latinos y pop de Rauw Alejandro.",
    url: "album.html?id=15",
    tracks: [
      { id: 1, title: "Todo de Ti", duration: "3:19" },
      { id: 2, title: "Sexo Virtual", duration: "3:28" },
      { id: 3, title: "Desesperados", duration: "3:44" },
      { id: 4, title: "Cúrame", duration: "2:44" },
      { id: 5, title: "2/Catorce", duration: "3:25" }
    ]
  },
  {
    id: 16,
    name: "Joytime",
    artist: "Marshmello",
    genre: "Electrónica",
    image: "assets/images/joytime.jpeg",
    description: "Álbum debut de Marshmello (2016), mezcla de EDM, trap y futuros beats característicos.",
    url: "album.html?id=16",
    tracks: [
      { id: 1, title: "Keep It Mello", duration: "4:18" },
      { id: 2, title: "Summer", duration: "3:53" },
      { id: 3, title: "Find Me", duration: "3:11" },
      { id: 4, title: "Take It Back", duration: "3:59" },
      { id: 5, title: "Know Me", duration: "3:23" }
    ]
  },
  // Álbumes adicionales
  {
    id: 17,
    name: "Discovery",
    artist: "Daft Punk",
    genre: "Electronic",
    image: "assets/images/discovery.jpeg",
    description: "Lanzado en 2001, este álbum redefinió la música electrónica con éxitos como 'One More Time'.",
    url: "album.html?id=17",
    tracks: [
      { id: 1, title: "One More Time", duration: "5:20" },
      { id: 2, title: "Digital Love", duration: "4:58" },
      { id: 3, title: "Harder, Better, Faster, Stronger", duration: "3:45" },
      { id: 4, title: "Aerodynamic", duration: "3:27" },
      { id: 5, title: "Something About Us", duration: "3:51" }
    ]
  },
  {
    id: 18,
    name: "Kind of Blue",
    artist: "Miles Davis",
    genre: "Jazz",
    image: "assets/images/blue.jpeg",
    description: "Lanzado en 1959, es considerado una obra maestra del jazz y un pilar del modal jazz.",
    url: "album.html?id=18",
    tracks: [
      { id: 1, title: "So What", duration: "9:22" },
      { id: 2, title: "Freddie Freeloader", duration: "9:46" },
      { id: 3, title: "Blue in Green", duration: "5:37" },
      { id: 4, title: "All Blues", duration: "11:33" },
      { id: 5, title: "Flamenco Sketches", duration: "9:26" }
    ]
  },
  {
    id: 19,
    name: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    genre: "Rock",
    image: "assets/images/led_IV.jpg",
    description: "Lanzado en 1971, incluye el emblemático 'Stairway to Heaven' y es uno de los álbumes más influyentes del rock.",
    url: "album.html?id=19",
    tracks: [
      { id: 1, title: "Black Dog", duration: "4:55" },
      { id: 2, title: "Rock and Roll", duration: "3:40" },
      { id: 3, title: "The Battle of Evermore", duration: "5:53" },
      { id: 4, title: "Stairway to Heaven", duration: "8:02" },
      { id: 5, title: "When the Levee Breaks", duration: "7:08" }
    ]
  },
  {
    id: 20,
    name: "Thriller",
    artist: "Michael Jackson",
    genre: "Pop",
    image: "assets/images/thriller.jpeg",
    description: "Lanzado en 1982, Thriller se convirtió en el álbum más vendido de la historia, fusionando pop, rock y R&B.",
    url: "album.html?id=20",
    tracks: [
      { id: 1, title: "Wanna Be Startin' Somethin'", duration: "6:03" },
      { id: 2, title: "Thriller", duration: "5:57" },
      { id: 3, title: "Beat It", duration: "4:18" },
      { id: 4, title: "Billie Jean", duration: "4:54" },
      { id: 5, title: "Human Nature", duration: "4:06" }
    ]
  },
  {
    id: 21,
    name: "Random Access Memories",
    artist: "Daft Punk",
    genre: "Electronic",
    image: "assets/images/ram.jpeg",
    description: "Lanzado en 2013, este álbum combina electrónica con sonidos retro y funk, destacando el éxito 'Get Lucky'.",
    url: "album.html?id=21",
    tracks: [
      { id: 1, title: "Give Life Back to Music", duration: "4:35" },
      { id: 2, title: "Instant Crush", duration: "5:37" },
      { id: 3, title: "Lose Yourself to Dance", duration: "5:53" },
      { id: 4, title: "Get Lucky", duration: "6:09" },
      { id: 5, title: "Contact", duration: "7:19" }
    ]
  },
  {
    id: 22,
    name: "Blue Train",
    artist: "John Coltrane",
    genre: "Jazz",
    image: "assets/images/blue_train.jpg",
    description: "Lanzado en 1957, es considerado un clásico del jazz que muestra el virtuosismo de John Coltrane.",
    url: "album.html?id=22",
    tracks: [
      { id: 1, title: "Blue Train", duration: "10:43" },
      { id: 2, title: "Moment's Notice", duration: "9:10" },
      { id: 3, title: "Locomotion", duration: "7:00" },
      { id: 4, title: "I'm Old Fashioned", duration: "9:40" },
      { id: 5, title: "Lazy Bird", duration: "7:20" }
    ]
  }
];


// ----------------------
// Lógica para listar y detallar álbumes
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  
  // 1) Llenar el LISTADO de álbumes (albumes.html)
  const albumsContainer = document.querySelector(".albums-list");
  if (albumsContainer) {
    albumsContainer.innerHTML = "";
    albumes.forEach((album) => {
      const card = document.createElement("a");
      card.href = album.url;
      card.classList.add("card");

      // Imagen del álbum
      const img = document.createElement("img");
      img.src = album.image;
      img.alt = album.name;
      img.classList.add("card-img");

      // Pie de foto con el nombre del álbum
      const caption = document.createElement("div");
      caption.classList.add("card-caption");
      caption.textContent = album.name;

      card.appendChild(img);
      card.appendChild(caption);
      albumsContainer.appendChild(card);
    });
  }

  // 2) Mostrar el DETALLE de un álbum (album.html)
  const urlParams = new URLSearchParams(window.location.search);
  const albumId = urlParams.get("id");
  if (albumId) {
    const album = albumes.find(a => a.id === parseInt(albumId));
    if (album) {
      // Actualizar información básica del álbum
      const nameEl = document.getElementById("album-name");
      const artistEl = document.getElementById("album-artist");
      const genreEl = document.getElementById("album-genre");
      const descriptionEl = document.getElementById("album-description");
      const imageEl = document.getElementById("album-image");

      if (nameEl) nameEl.textContent = album.name;
      if (artistEl) artistEl.textContent = album.artist;
      if (genreEl) genreEl.textContent = album.genre;
      if (descriptionEl) descriptionEl.textContent = album.description;
      if (imageEl) {
        imageEl.src = album.image;
        imageEl.alt = album.name;
      }

      // Mostrar las pistas del álbum si existen
      const trackList = document.getElementById("track-list");
      if (trackList) {
        trackList.innerHTML = "";
        
        if (album.tracks && album.tracks.length > 0) {
          album.tracks.forEach((track, index) => {
            const li = document.createElement("li");
            li.className = "track";
            
            const a = document.createElement("a");
            a.href = `cancion.html?id=${track.id}&album=${album.id}`;
            a.className = "track-link";
            
            const numberSpan = document.createElement("span");
            numberSpan.className = "track-number";
            numberSpan.textContent = index + 1;
            
            const titleSpan = document.createElement("span");
            titleSpan.className = "track-title";
            titleSpan.textContent = track.title;
            
            const durationSpan = document.createElement("span");
            durationSpan.className = "track-duration";
            durationSpan.textContent = track.duration;
            
            a.appendChild(numberSpan);
            a.appendChild(titleSpan);
            a.appendChild(durationSpan);
            li.appendChild(a);
            trackList.appendChild(li);
          });
        } else {
          trackList.innerHTML = "<li>No hay pistas disponibles para este álbum</li>";
        }
      }
    } else {
      const content = document.getElementById("album-content");
      if (content) {
        content.innerHTML = "<p>Álbum no encontrado.</p>";
      }
    }
  }
});
