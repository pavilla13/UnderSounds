// amigos.js
// amigos.js

const amigos = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    description: "Apasionado por el rock y pop, siempre en búsqueda de nuevos sonidos y experiencias musicales.",
    url: "/amigoLista?id=1"
  },
  {
    id: 2,
    name: "María González",
    description: "Apasionada por la electrónica y el jazz, exploradora de ritmos y sonidos innovadores.",
    url: "/amigoLista?id=2"
  },
  {
    id: 3,
    name: "Lucía Fernández",
    description: "Fanática del indie y el folk, siempre descubriendo nuevas bandas y letras profundas.",
    url: "/amigoLista?id=3"
  },
  {
    id: 4,
    name: "David Martínez",
    description: "Aficionado al rap y al hip hop clásico. Cree que la música puede cambiar el mundo.",
    url: "/amigoLista?id=4"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------
  // 1) Llenar el LISTADO de amigos (amigos.html)
  // ----------------------
  const friendsContainer = document.querySelector('.friends-list');
  if (friendsContainer) {
    friendsContainer.innerHTML = "";
    amigos.forEach((friend) => {
      const card = document.createElement("a");
      card.href = friend.url;
      card.classList.add("friend-card");

      // Imagen de amigo
      const img = document.createElement("img");
      img.src = friend.avatar;
      img.alt = friend.name;
      img.classList.add("friend-avatar");

      // Información del amigo
      const info = document.createElement("div");
      info.classList.add("friend-info");

      const name = document.createElement("h2");
      name.classList.add("friend-name");
      name.textContent = friend.name;

      const description = document.createElement("p");
      description.classList.add("friend-description");
      description.textContent = friend.description;

      info.appendChild(name);
      info.appendChild(description);
      card.appendChild(img);
      card.appendChild(info);
      friendsContainer.appendChild(card);
    });
  }

  // ----------------------
  // 2) Mostrar el DETALLE de un amigo (amigoLista.html)
  // ----------------------
  const urlParams = new URLSearchParams(window.location.search);
  const friendId = urlParams.get("id");
  if (friendId) {
    const friend = amigos.find(f => f.id === parseInt(friendId));
    if (friend) {
      const nameEl = document.getElementById("friend-name");
      const avatarEl = document.getElementById("friend-avatar");
      const descriptionEl = document.getElementById("friend-description");

      if (nameEl) nameEl.textContent = friend.name;
      if (avatarEl) {
        avatarEl.src = friend.avatar;
        avatarEl.alt = friend.name;
      }
      if (descriptionEl) descriptionEl.textContent = friend.description;
    } else {
      const content = document.getElementById("friend-content");
      if (content) {
        content.innerHTML = "<p>Amigo no encontrado.</p>";
      }
    }
  }
});
