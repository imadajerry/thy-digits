function sendMail() {
    const phoneInput = document.getElementById("ph-no").value;

    if (!phoneInput) {
        alert("Pray, thou must not leave the field empty. I beseech thee, enter thy digits.");
        return;
    }

    let params = {
        phno: phoneInput
    }

    emailjs.send("service_2wu075r", "template_t1wfur8", params)
        .then(function(response) {
            alert("Twas my pleasure");   
            document.getElementById("ph-no").value = "";
        }, function(error) {
            alert("Alas! Something went awry... \nThy message could not be sent. Try again anon.");
            console.error("EmailJS Error:", error);
        });
    document.getElementById("ph-no").value = "";
}

const yesButton = document.getElementById("yes-btn")
const noButton = document.getElementById("no-btn")
const mainContent = document.getElementById("main-content")
const digitEntry = document.getElementById("digit-entry")

function yesBtn() {
    digitEntry.classList.remove("hidden")
    mainContent.classList.add("hidden")
}


const customConfirm = document.getElementById("custom-confirm");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");

let noBtnDodged = false

function noBtn() {
    if (!noBtnDodged) {
        noButton.style.transform = "translateX(60px)";
        noButton.style.transition = "transform 0.3s ease";
        noBtnDodged = true;
    } else {
        customConfirm.classList.remove("hidden");
    }
}

confirmYes.addEventListener("click", () => {
    digitEntry.classList.add("hidden");
    customConfirm.classList.add("hidden");
    const response = confirm("Art thou utterly resolved to forsake me and withhold thy digits?");

    if (response) {
        digitEntry.classList.add("hidden");
        alert("Alas! I shall retreat.");
    } else {
        alert("Then hope yet lingers in the air!");
    }
});

confirmNo.addEventListener("click", () => {
    customConfirm.classList.add("hidden");
    alert("Thou art most gracious! My heart rejoiceth!");
});

let isDrawing = false;
let lastDraw = 0;
const drawInterval = 80;

function createParticle(x, y, isLeaf = false) {
  const el = document.createElement('div');
  el.className = 'particle ' + (isLeaf ? 'leaf' : 'petal');
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;

  const moveX = (Math.random() - 0.5) * 120;
  const moveY = -60 - Math.random() * 100;
  const rotation = (Math.random() - 0.5) * 180;
  const scale = 0.6 + Math.random() * 0.8;

  el.style.setProperty('--x', `${moveX}px`);
  el.style.setProperty('--y', `${moveY}px`);
  el.style.setProperty('--rot', `${rotation}deg`);
  el.style.setProperty('--scale', scale.toFixed(2));

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

function scatterParticles(x, y) {
  const count = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i++) {
    const isLeaf = Math.random() < 0.30;
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    createParticle(x + offsetX, y + offsetY, isLeaf);
  }
}

function handleDraw(x, y) {
  const now = Date.now();
  if (now - lastDraw > drawInterval) {
    lastDraw = now;
    scatterParticles(x, y);
  }
}

document.addEventListener('mousedown', (e) => {
  isDrawing = true;
  handleDraw(e.clientX, e.clientY);
});

document.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    handleDraw(e.clientX, e.clientY);
  }
});

document.addEventListener('mouseup', () => {
  isDrawing = false;
});

document.addEventListener('touchstart', (e) => {
  isDrawing = true;
  const touch = e.touches[0];
  handleDraw(touch.clientX, touch.clientY);
});

document.addEventListener('touchmove', (e) => {
  if (isDrawing) {
    const touch = e.touches[0];
    handleDraw(touch.clientX, touch.clientY);
  }
});

document.addEventListener('touchend', () => {
  isDrawing = false;
});
