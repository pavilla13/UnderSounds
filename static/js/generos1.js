// static/js/generos.js

// Obtener datos de géneros y canciones (en list y detalle)
const dataHolder = document.getElementById('data-generos') || document.getElementById('data-genero');
let generos = [], canciones = [];
if (dataHolder) {
  generos   = JSON.parse(dataHolder.dataset.generos);
  canciones = JSON.parse(dataHolder.dataset.canciones);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) LISTADO DE GÉNEROS (generos.html)
  const listContainer = document.querySelector('.genres-container');
  if (listContainer) {
    listContainer.innerHTML = '';
    generos.forEach(g => {
      const card = document.createElement('a');
      card.href = g.url;
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = g.image;
      img.alt = g.nombreGenero;
      img.classList.add('card-img');

      const caption = document.createElement('div');
      caption.classList.add('card-caption');
      caption.textContent = g.nombreGenero;

      card.append(img, caption);
      listContainer.append(card);
    });
    return; // no ejecutar detalle
  }

  // 2) DETALLE DE GÉNERO (generos especifico.html)
  const nameEl = document.getElementById('genre-name');
  if (nameEl) {
    const params  = new URLSearchParams(window.location.search);
    const idParam = params.get('id') || params.get('idGenero');
    const genero  = generos.find(g => String(g.idGenero) === idParam);
    if (!genero) {
      document.querySelector('.content').innerHTML = '<p>Género no encontrado.</p>';
      return;
    }

    // Cabecera: imagen, título, descripción
    nameEl.textContent = genero.nombreGenero;
    const imgEl = document.getElementById('genre-image');
    if (imgEl) {
      imgEl.src = genero.image;
      imgEl.alt = genero.nombreGenero;
    }
    const descEl = document.getElementById('genre-description');
    if (descEl) descEl.textContent = genero.descripcion;

    // Valoración en estrellas
    const ratingEl = document.getElementById('genre-rating');
    if (ratingEl) {
      ratingEl.innerHTML = '';
      const stars = Number(genero.valoracion) || 0;
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.textContent = (i <= stars ? '★' : '☆');
        ratingEl.append(star);
      }
    }

    // Listar canciones en #track-list
    const trackList = document.getElementById('track-list');
    if (trackList) {
      trackList.innerHTML = '';
      // Filtrar por idGenero o por nombre de género
      let pistas = canciones.filter(c => String(c.idGenero) === String(genero.idGenero));
      if (pistas.length === 0) {
        pistas = canciones.filter(
          c => c.genre && c.genre.toLowerCase() === genero.nombreGenero.toLowerCase()
        );
      }
      if (pistas.length === 0) {
        trackList.innerHTML = '<li>No hay canciones para este género.</li>';
      } else {
        pistas.forEach(p => {
          const li = document.createElement('li');
          li.className = 'track';

          const a = document.createElement('a');
          a.href = `/cancion?id=${p.id}`;
          a.className = 'track-link';

          const img = document.createElement('img');
          img.src = p.cover || p.image;
          img.alt = p.title || p.nombre;
          img.className = 'track-img';

          const title = document.createElement('span');
          title.className = 'track-title';
          title.textContent = p.title || p.nombre;

          const dur = document.createElement('span');
          dur.className = 'track-duration';
          dur.textContent = p.duration || p.duracion;

          a.append(img, title, dur);
          li.appendChild(a);
          trackList.appendChild(li);
        });
      }
    }

    // Botón volver a /generos
    const backBtn = document.querySelector('.btn-back');
    if (backBtn) backBtn.href = '/generos';
  }
});
