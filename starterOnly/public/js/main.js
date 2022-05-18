import { Form } from "./modules/form.js";

// DOM Elements
const modalForm = document.getElementById("inscription");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const iconNav = document.getElementById("iconNav");

// launch modal event
modalBtn.forEach((launchBtn) =>
  launchBtn.addEventListener("click", launchModal)
);

// close modal event
modalClose.forEach((closeBtn) =>
  closeBtn.addEventListener("click", closeModal)
);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check if every field of input is correctly filled, allow to send the form if everything is ok, return and hollow the error whern there is one
modalForm.addEventListener("submit", (envoi) => {
  envoi.preventDefault();
  let prenom = document.getElementById("first").value;
  let nom = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("birthdate").value;
  let participe = document.getElementById("quantity").value;
  let form = new Form(prenom, nom, email, date, participe);
  form.checkData(envoi);
  form.checkPrenom();
  form.checkNom();
  form.checkEmail();
  form.checkDate();
  form.checkParticipation();
  form.checkData(envoi).then((envoiValid) => {
    form.checkValid(envoiValid);
  });
});

// call editNav to open the nav from the icon
iconNav.addEventListener("click", editNav);

// make the icon appear if the conditions are filled and display the icon is clicked on
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
