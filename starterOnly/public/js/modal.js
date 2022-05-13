// DOM Elements
const modalForm = document.getElementById("inscription");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const iconNav = document.getElementById("iconNav");
const formData = document.querySelector(".formData");
const formPrenom = document.getElementById("formFirst");
const formNom = document.getElementById("formLast");
const formMail = document.getElementById("formEmail");
const formDate = document.getElementById("formBirthdate");
const formParticipe = document.getElementById("formQuantity");

// launch modal event
modalBtn.forEach((launchBtn) => launchBtn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check if every field of input is correctly filled, allow to send the form if everything is ok, return and hollow the error whern there is one
modalForm.addEventListener("submit", (e) => {
  let prenom = document.getElementById("first").value;
  let nom = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("birthdate").value;
  let participe = document.getElementById("quantity").value;
  let erreur = document.getElementById("erreur");
  canSubmit = "true";
  if (prenom.length < 2) {
    e.preventDefault();
    alert("Veuillez renseigner un prenom de plus de deux caractères.");
    erreur.innerHTML = "Veuillez renseigner correctement les inforamtions demandés";
    formPrenom.setAttribute("data-error-visible", "true");
    canSubmit = "false";
  }
  if (nom.length < 4) {
    alert("Veuillez renseigner un nom de plus de trois caractères.");
    formNom.setAttribute("data-error-visible", "true");
    canSubmit = "false";
  }
  if (email.length < 1 || /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i.test(email)) {
    alert("Veuillez renseigner une adresse email valide.");
    formMail.setAttribute("data-error-visible", "true");
    canSubmit = "false";
  }
  if (isNaN(date) || date < 1 || date > 100) {
    alert("Veuillez renseigner un age entre 1 et 100 ans.");
    formDate.setAttribute("data-error-visible", "true");
    canSubmit = "false";
  }
  if (isNaN(participe) || participe < 0 || participe > 99) {
    alert("Veuillez renseigner un nombre de participations entre 0 et 99.");
    formParticipe.setAttribute("data-error-visible", "true");
    canSubmit = "false";
  }
  if (canSubmit == "false") {
    return false;
  }
  else {
    alert("Inscription validée !");
  }
});

// call editNav to open the nav from the icon
iconNav.addEventListener("click", editNav).preventDefault();

// make the icon appear if the conditions are filled and display the icon is clicked on
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
