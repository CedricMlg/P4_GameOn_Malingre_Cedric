class Form {
  constructor(prenom, nom, email, anniversaire, participations) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.date = anniversaire;
    this.participe = participations;
    this.formData = document.querySelectorAll("div.formData");
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
    this.formRadio = document.getElementById("formRadio");
    this.alertRadio = document.getElementById("formRAlert");
    this.formCheck = document.getElementById("formCheck");
    this.formCheckbox1 = document.getElementById("checkbox1");
    this.alertCheck = document.getElementById("formCAlert");
  }

  async checkData(envoi) {
    envoi.preventDefault();
    await this.checkPrenom();
    await this.checkNom();
    // await this.checkEmail();
    await this.checkDate();
    await this.checkParticipation();
    await this.checkRadio();
    await this.checkConditions();
  }

  async checkPrenom() {
    if (this.prenom.length < 2) {
      this.alertPrenom.innerHTML =
        "Veuillez renseigner un prenom de plus de deux caractères.";
      this.formPrenom.setAttribute("data-error-visible", "true");
    } else {
      this.formPrenom.setAttribute("data-error-visible", "false");
      this.alertPrenom.innerHTML = "";
    }
  }

  async checkNom() {
    if (this.nom.length < 2) {
      this.alertNom.innerHTML =
        "Veuillez renseigner un nom de plus de deux caractères.";
      this.formNom.setAttribute("data-error-visible", "true");
    } else {
      this.formNom.setAttribute("data-error-visible", "false");
      this.alertNom.innerHTML = "";
    }
  }

  // async checkEmail() {
  //   const mailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  //   if (this.email == "" || this.email.match(mailReg)) {
  //     this.alertEmail.innerHTML =
  //       "Veuillez renseigner une adresse email valide.";
  //     this.formMail.setAttribute("data-error-visible", "true");
  //   } else {
  //     this.formMail.setAttribute("data-error-visible", "false");
  //     this.alertEmail.innerHTML =
  //     "";
  //   }
  // }

  async checkDate() {
    if (this.date == "") {
      this.alertAnniversaire.innerHTML =
        "Veuillez renseigner votre date de naissance";
      this.formDate.setAttribute("data-error-visible", "true");
    } else {
      this.formDate.setAttribute("data-error-visible", "false");
      this.alertAnniversaire.innerHTML = "";
    }
  }

  async checkParticipation() {
    if (
      isNaN(this.participe) ||
      this.participe == "" ||
      this.participe < 0 ||
      this.participe > 99
    ) {
      this.alertParticipation.innerHTML =
        "Veuillez renseigner un nombre de participations entre 0 et 99.";
      this.formParticipe.setAttribute("data-error-visible", "true");
    } else {
      this.formParticipe.setAttribute("data-error-visible", "false");
      this.alertParticipation.innerHTML = "";
    }
  }

  async checkRadio() {
    // let radioValid = this.radioName.forEach(ifRadioChecked =>  {
    //   if (ifRadioChecked.checked) {
    //     console.log("non")
    //       return false;
    //   } else {
    //     console.log("oui")
    //     return true;
    //   }
    // });
    let radioValid = function () {
      let radioName = document.getElementsByName("location");
      console.log(radioName.length);
      for (let i = 0; i < radioName.length; i++) {
        console.log(i);
        if (radioName[i].checked == true) {
          console.log("oui");
          return false;
        } else {
          console.log("non");
          return true;
        }
      }
    };
    //   let isSelected = function() {
    //     let radioObj = document.formData.location;

    //     for(let i=0; i<radioObj.length; i++) {
    //         if( radioObj[i].checked ) {
    //             return true;
    //         }
    //     }

    //     return false;
    // };
    if (!radioValid()) {
      this.alertRadio.innerHTML =
        "Veuillez selectionner le tournois auquel vous souhaitez participer";
      this.formRadio.setAttribute("data-error-visible", "true");
    } else {
      this.formRadio.setAttribute("data-error-visible", "false");
      this.alertRadio.innerHTML = "";
    }
  }

  async checkConditions() {
    if (this.formCheckbox1.checked == false) {
      this.alertCheck.innerHTML =
        "Veuillez accepter les conditions d'utilisation avant de vous inscrire";
      this.formCheck.setAttribute("data-error-visible", "true");
    } else {
      this.formCheck.setAttribute("data-error-visible", "false");
      this.alertCheck.innerHTML = "";
    }
  }

  // checkValid(envoiValid) {
  //   let dataValid = this.formData.forEach(dataCheck =>  {
  //     let dataValue = dataCheck.getAttribute('data-error-visible');
  //     if (dataValue == dataCheck.getAttribute('data-error-visible = "true"')) {
  //       alert("oui");
  //         return true;
  //     } else {
  //       alert("non");
  //       return false;
  //     }
  //   });
  //   // console.log(dataCheck)
  //   // this.dataError = this.formData.forEach(dataError => {console.log(dataError.getAttribute('data-error-visible'))});
  //   if (!dataValid) {
  //     // envoiValid.preventDefault();
  //     // console.log(this.dataError);
  //     // return false;
  //     alert("ratio");
  //   } else {
  //     alert("Inscription validée !");
  //   }
  // }
}

export { Form };
