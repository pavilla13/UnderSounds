// amigos.js
// amigos.js

const amigos = [
  {
    id: 1,
    name: "Amigo 1",
    description: "Apasionado por el rock y pop, siempre buscando nuevos sonidos.",
    avatar: "assets/images/amigo1.jpg",
    url: "amigoLista.html?id=1"
  },
  {
    id: 2,
    name: "Amigo 2",
    description: "Amante de la electrónica y el jazz, explorador de ritmos.",
    avatar: "assets/images/amiga2.jpg",
    url: "amigoLista.html?id=2"
  },
  {
    id: 3,
    name: "Amigo 3",
    description: "Fanático de los clásicos y siempre actualizado en novedades.",
    avatar: "assets/images/amiga4.jpg",
    url: "amigoLista.html?id=3"
  },
  {
    id: 4,
    name: "Amigo 4",
    description: "Seguidor de lo indie y alternativo, con gusto por lo experimental.",
    avatar: "assets/images/amigo3.jpg",
    url: "amigoLista.html?id=4"
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
