let prenom = document.getElementById("first").value;
let nom = document.getElementById("last").value;
let email = document.getElementById("email").value;
let date = document.getElementById("birthdate").value;
let participe = document.getElementById("quantity").value;

class Form {
    constructor(prenom, nom, email, anniversaire, participations) {
      this.prenom = prenom;
      this.nom = nom;
      this.email = email;
      this.anniversaire = date;
      this.participations = participe;
    }
  }
  
  // check if every field of input is correctly filled, allow to send the form if everything is ok, return and hollow the error whern there is one
  modalForm.addEventListener("submit", (e) => {
    const mailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let erreur = document.getElementById("erreur");
    canSubmit = "true";
    if (prenom.length < 2) {
      e.preventDefault();
      alert("Veuillez renseigner un prenom de plus de deux caractères.");
      erreur.innerHTML = "Veuillez renseigner correctement les inforamtions demandés";
      formPrenom.setAttribute("data-error-visible", "true");
      canSubmit = "false";
    }
    else {
      formPrenom.setAttribute("data-error-visible", "false");
    }
    if (nom.length < 4) {
      alert("Veuillez renseigner un nom de plus de trois caractères.");
      formNom.setAttribute("data-error-visible", "true");
      canSubmit = "false";
    }
    else {
      formNom.setAttribute("data-error-visible", "false");
    }
    if (email.length < 1 || email.match(mailReg)) {
      alert("Veuillez renseigner une adresse email valide.");
      formMail.setAttribute("data-error-visible", "true");
      canSubmit = "false";
    }
    else {
      formMail.setAttribute("data-error-visible", "false");
    }
    if (date == "") {
      alert("Veuillez renseigner votre date de naissance");
      formDate.setAttribute("data-error-visible", "true");
      canSubmit = "false";
    }
    else {
      formDate.setAttribute("data-error-visible", "false");
    }
    if (isNaN(participe) || participe < 0 || participe > 99) {
      alert("Veuillez renseigner un nombre de participations entre 0 et 99.");
      formParticipe.setAttribute("data-error-visible", "true");
      canSubmit = "false";
    }
    else {
      formParticipe.setAttribute("data-error-visible", "false");
    }
    if (canSubmit == "false") {
      e.preventDefault();
      return false;
    }
    else {
      alert("Inscription validée !");
    }
  });

  export { Form };