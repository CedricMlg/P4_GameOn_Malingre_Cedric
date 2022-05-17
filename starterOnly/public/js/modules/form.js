class Form {
  constructor(prenom, nom, email, anniversaire, participations) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.date = anniversaire;
    this.participe = participations;
    this.formData = document.querySelector(".formData");
    this.formPrenom = document.getElementById("formFirst");
    this.alertPrenom = document.getElementById("formFAlert");
    this.formNom = document.getElementById("formLast");
    this.alertNom = document.getElementById("formLAlert");
    this.formMail = document.getElementById("formEmail");
    this.alertEmail = document.getElementById("formEAlert");
    this.formDate = document.getElementById("formBirthdate");
    this.alertAnniversaire = document.getElementById("formBAlert");
    this.formParticipe = document.getElementById("formQuantity");
    this.alertParticipation = document.getElementById("formQAlert");
    this.dataError = this.formData.getAttribute("data-error-visible")
    this.canSubmit = true;
  }

    async checkData(envoi){
    envoi.preventDefault();
    const cP = await this.checkPrenom();
    const cN = await this.checkNom();
    const cE = await this.checkEmail();
    const cD = await this.checkDate();
    const cPa = await this.checkParticipation();
    return cP + cN + cE + cD + cPa;
  }

  async checkPrenom(){
    if (this.prenom.length < 2) {
      this.alertPrenom.innerHTML =
        "Veuillez renseigner un prenom de plus de deux caractères.";
      this.formPrenom.setAttribute("data-error-visible", "true");
      this.canSubmit = false;
    } else {
      this.formPrenom.setAttribute("data-error-visible", "false");
    }
  }

  async checkNom(){
    if (this.nom.length < 2) {
      this.alertNom.innerHTML =
        "Veuillez renseigner un nom de plus de deux caractères.";
      this.formNom.setAttribute("data-error-visible", "true");
      this.canSubmit = false;
    } else {
      this.formNom.setAttribute("data-error-visible", "false");
    }
  }

  async checkEmail(){
    const mailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (this.email == "" || this.email.match(mailReg)) {
      this.alertEmail.innerHTML =
        "Veuillez renseigner une adresse email valide.";
      this.formMail.setAttribute("data-error-visible", "true");
      this.canSubmit = false;
      console.log(email);
    } else {
      this.formMail.setAttribute("data-error-visible", "false");
    }
  }

  async checkDate(){
    if (this.date == "") {
      this.alertAnniversaire.innerHTML =
        "Veuillez renseigner votre date de naissance";
      this.formDate.setAttribute("data-error-visible", "true");
      this.canSubmit = false;
    } else {
      this.formDate.setAttribute("data-error-visible", "false");
    }
  }

  async checkParticipation(){
    if (
      isNaN(this.participe) ||
      this.participe == "" ||
      this.participe < 0 ||
      this.participe > 99
    ) {
      this.alertParticipation.innerHTML =
        "Veuillez renseigner un nombre de participations entre 0 et 99.";
      this.formParticipe.setAttribute("data-error-visible", "true");
      this.canSubmit = false;
    } else {
      this.formParticipe.setAttribute("data-error-visible", "false");
    }
  }

  // checkValid(envoiValid) {
  //   let erreur = document.getElementById("erreur");
  //   if (this.canSubmit == false) {
  //     envoiValid.preventDefault();
  //     erreur.innerHTML =
  //     "Veuillez renseigner correctement les inforamtions demandés";
  //     console.log(this.dataError);
  //     return false;
  //   } else {
  //     alert("Inscription validée !");
  //   }
  // }
}

export { Form };
