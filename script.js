const CONFIG = {
  weddingDate: "2026-06-26T11:00:00+07:00",
  defaultRecipient: "Bapak/Ibu/Saudara/i",
};

const params = new URLSearchParams(window.location.search);
const recipient = params.get("to") || CONFIG.defaultRecipient;
document.getElementById("recipientName").textContent = recipient.replace(/\+/g, " ");

const gate = document.getElementById("gate");
const openButton = document.getElementById("openInvitation");
const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

function playMusic() {
  music.play().then(() => {
    musicToggle.classList.add("is-playing");
  }).catch(() => {
    musicToggle.classList.remove("is-playing");
  });
}

openButton.addEventListener("click", () => {
  gate.classList.add("is-open");
  document.body.classList.remove("gate-locked");
  playMusic();
});

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    playMusic();
  } else {
    music.pause();
    musicToggle.classList.remove("is-playing");
  }
});

const countdownItems = [...document.querySelectorAll("#countdown div strong")];
const targetDate = new Date(CONFIG.weddingDate).getTime();

function updateCountdown() {
  const distance = Math.max(0, targetDate - Date.now());
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  [days, hours, minutes, seconds].forEach((value, index) => {
    countdownItems[index].textContent = String(value).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.getElementById("rsvpForm");
const wishes = document.getElementById("wishes");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const item = document.createElement("article");
  item.className = "wish";
  item.innerHTML = `
    <strong>${escapeHtml(data.get("name"))} - ${escapeHtml(data.get("attendance"))}</strong>
    <p>${escapeHtml(data.get("message") || "Selamat menempuh hidup baru.")}</p>
  `;
  wishes.prepend(item);
  form.reset();
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const copyAccount = document.getElementById("copyAccount");
copyAccount.addEventListener("click", async () => {
  const value = document.getElementById("accountNumber").textContent;
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(value);
  } else {
    const helper = document.createElement("textarea");
    helper.value = value;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  copyAccount.textContent = "Tersalin";
  setTimeout(() => {
    copyAccount.textContent = "Salin Nomor";
  }, 1600);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery__item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.className = "";
    lightboxImage.style.backgroundImage = `url("${item.dataset.image}")`;
    lightbox.classList.add("is-visible");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("is-visible");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("is-visible");
  }
});
