function sendMail() {
    const phoneInput = document.getElementById("ph-no").value;

    if (!phoneInput) {
        alert("Pray, thou must not leave the field empty. I beseech thee, enter thy digits.");
        return;
    }
    let parms = {
        phno: document.getElementById("ph-no").value
    }

    emailjs.send("service_2wu075r", "service_2wu075r", parms).then(alert("Tis was my pleasure"))
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
        alert("Alas! I shall retreat");
    } else {
        alert("Then hope yet lingers in the air!");
    }
});

confirmNo.addEventListener("click", () => {
    customConfirm.classList.add("hidden");
    alert("Thou art most gracious! My heart rejoiceth!");
});
