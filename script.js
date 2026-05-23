// ==========================
// 1. NAVBAR dynamique au scroll
// ==========================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "rgba(255, 252, 240, 0.96)";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
    }
});

// ==========================
// 2. SCROLL fluide vers les sections
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        // Ne pas appliquer le scroll fluide pour les liens avec data-bs-toggle
        if (this.getAttribute('data-bs-toggle')) return;

        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ==========================
// 3. Active le lien du menu correspondant à la section visible
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ==========================
// 4. ANIMATION apparition des éléments
// ==========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card-service, .event-card, .gallery-item, .icon-circle").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ==========================
// 5. BOUTON retour en haut
// ==========================
const btnTop = document.createElement("button");
btnTop.innerHTML = "↑";
btnTop.id = "scrollTopBtn";
document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "30px";
btnTop.style.right = "30px";
btnTop.style.background = "#c9a03d";
btnTop.style.color = "#fff";
btnTop.style.border = "none";
btnTop.style.padding = "10px 15px";
btnTop.style.borderRadius = "50%";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

// ==========================
// 6. MENU auto-close (mobile)
// ==========================
const navLinksMobile = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinksMobile.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

// ==========================
// 7. Initialisation de Lightbox pour la galerie
// ==========================
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
});

// ==========================
// 8. MESSAGE console (debug)
// ==========================
console.log("Site CBCA Mulongwe chargé avec succès !");



// ===== ENVOI DU FORMULAIRE VERS WHATSAPP =====

document.getElementById("contactForm").addEventListener("submit", function(event) {
  
  // Empêche le rechargement de la page
  event.preventDefault();

  // Récupération des valeurs du formulaire
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Ton numéro WhatsApp (CHANGE ICI)
  let phoneNumber = "243970096597"; // sans +

  // Construction du message
  let text = 
`Bonjour, je viens du site de l'église.

Nom: ${name}
Email: ${email}
Sujet: ${subject}
Message: ${message}`;

  // Encodage du message pour URL
  let encodedText = encodeURIComponent(text);

  // Lien WhatsApp
  let url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  // Ouvrir WhatsApp
  window.open(url, "_blank");
});



// ===== OUVRIR / FERMER LE CHATBOT =====
function toggleChat() {
  const chat = document.getElementById("chatbot-container");

  // Si le chatbot est caché → on l'affiche
  if (chat.style.display === "none" || chat.style.display === "") {
    chat.style.display = "flex";
  } 
  // Sinon → on le cache
  else {
    chat.style.display = "none";
  }
}


// ===== ENVOI AVEC BOUTON =====
function sendMessage() {

  const input = document.getElementById("chatbot-input");
  const message = input.value.toLowerCase().trim();
  const chatbox = document.getElementById("chatbot-messages");

  // Si vide → on arrête
  if (message === "") return;

  // Afficher message utilisateur
  chatbox.innerHTML += `<p><strong>Vous :</strong> ${input.value}</p>`;

  // Réponse par défaut
  let response = "Je n'ai pas bien compris. Pouvez-vous reformuler ?";

  // ===== RECHERCHE DANS LA BASE =====
  for (let item of knowledgeBase) {
    for (let keyword of item.keywords) {
      if (message.includes(keyword)) {
        response = item.answer;
        break;
      }
    }
  }

  // Petite simulation humaine (temps de réponse)
  setTimeout(() => {
    chatbox.innerHTML += `<p><strong>Assistant :</strong> ${response}</p>`;
    
    // Scroll automatique vers le bas
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 400);

  // Vider input
  input.value = "";
}


// ===== ENVOI AVEC TOUCHE ENTRÉE =====
document.addEventListener("DOMContentLoaded", function () {
  
  const input = document.getElementById("chatbot-input");

  // Quand on appuie sur Entrée
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // empêche rechargement
      sendMessage(); // envoie message
    }
  });

});


// ===== MESSAGE AUTOMATIQUE AU PREMIER OUVERTURE =====
let firstOpen = true;

function toggleChat() {
  const chat = document.getElementById("chatbot-container");
  const chatbox = document.getElementById("chatbot-messages");

  if (chat.style.display === "none" || chat.style.display === "") {
    chat.style.display = "flex";

    // Message spécial première ouverture
    if (firstOpen) {
      setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Assistant :</strong> Je peux vous aider sur les cultes, horaires, événements et contacts 🙏</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
      }, 800);

      firstOpen = false;
    }

  } else {
    chat.style.display = "none";
  }
}