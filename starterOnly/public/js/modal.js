// DOM Elements
const modalForm = document.getElementById("inscription");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// message de validation formulaire
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // erreur.innerText = "Veuillez renseigner correctement les inforamtions demandés";
  // formData.dataset.errorVisible.innerHTML = "true";
  // alert("Inscription validée !");
  let prenom = document.getElementById("first").value;
  let nom = document.getElementById("last").value;
  let email = document.getElementById("email").value.indexOf("@");
  let date = document.getElementById("birthdate").value;
  let participe = document.getElementById("quantity").value;
  let erreur = document.getElementById("erreur");
  canSubmit = "true";
  if (prenom.length < 2) {
    erreur.innerHTML = "Veuillez renseigner correctement les inforamtions demandés";
    // formData.dataset.errorVisible.innerHTML = "true";
    alert("Veuillez renseigner un prenom de plus de deux caractères.")
    canSubmit = "false";
  }
  if (nom.length < 4) {
    alert("Veuillez renseigner un nom de plus de trois caractères.")
    canSubmit = "false";
  }
  if (isNaN(date) || date < 1 || date > 100) {
    alert("Veuillez renseigner un age entre 1 et 100 ans.")
    canSubmit = "false";
  }
  if (isNaN(participe) || participe < 0 || participe > 99) {
    alert("Veuillez renseigner un nombre de participations entre 0 et 99.")
    canSubmit = "false";
  }
  if (canSubmit == "false") {
    return false;
  }
  else {
    alert("Inscription validée !");
  }
});

function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
