!function(){"use strict";class e{constructor(e,t,i,n,o){this.prenom=e,this.nom=t,this.email=i,this.date=n,this.participe=o,this.formData=document.querySelectorAll("div.formData"),this.formPrenom=document.getElementById("formFirst"),this.alertPrenom=document.getElementById("formFAlert"),this.formNom=document.getElementById("formLast"),this.alertNom=document.getElementById("formLAlert"),this.formMail=document.getElementById("formEmail"),this.alertEmail=document.getElementById("formEAlert"),this.formDate=document.getElementById("formBirthdate"),this.alertAnniversaire=document.getElementById("formBAlert"),this.formParticipe=document.getElementById("formQuantity"),this.alertParticipation=document.getElementById("formQAlert"),this.formRadio=document.getElementById("formRadio"),this.alertRadio=document.getElementById("formRAlert"),this.formCheck=document.getElementById("formCheck"),this.formCheckbox1=document.getElementById("checkbox1"),this.alertCheck=document.getElementById("formCAlert"),this.modalBody=document.querySelector(".modal-body"),this.modalAlert=document.querySelector(".submitAlert")}async checkData(e){e.preventDefault(),await this.checkPrenom(),await this.checkNom(),await this.checkEmail(),await this.checkDate(),await this.checkParticipation(),await this.checkRadio(),await this.checkConditions()}async checkPrenom(){let e=this.prenom.length>2,t=this.alertPrenom,i=this.formPrenom;this.controlInput(e,t,i,"Veuillez renseigner un prenom de plus de deux caractères.")}async checkNom(){let e=this.nom.length>2,t=this.alertNom,i=this.formNom;this.controlInput(e,t,i,"Veuillez renseigner un nom de plus de deux caractères.")}async checkEmail(){let e=""!=this.email&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email),t=this.alertEmail,i=this.formMail;this.controlInput(e,t,i,"Veuillez renseigner une adresse email valide.")}async checkDate(){let e=""!=this.date,t=this.alertAnniversaire,i=this.formDate;this.controlInput(e,t,i,"Veuillez renseigner votre date de naissance.")}async checkParticipation(){let e=""!=this.participe&&this.participe>0&&this.participe<99,t=this.alertParticipation,i=this.formParticipe;this.controlInput(e,t,i,"Veuillez renseigner un nombre de participations entre 0 et 99.")}async checkRadio(){let e=null!=document.querySelector("[name='location']:checked"),t=this.alertRadio,i=this.formRadio;this.controlInput(e,t,i,"Veuillez selectionner le tournois auquel vous souhaitez participer.")}async checkConditions(){let e=this.formCheckbox1.checked,t=this.alertCheck,i=this.formCheck;this.controlInput(e,t,i,"Veuillez accepter les conditions d'utilisation avant de vous inscrire.")}controlInput(e,t,i,n){0==e?(t.innerHTML=n,i.setAttribute("data-error-visible","true")):(i.setAttribute("data-error-visible","false"),t.innerHTML="")}checkValid(e){if(!Array.from(this.formData).every((e=>"false"===e.getAttribute("data-error-visible"))))return!1;this.modalBody.style.display="none",this.modalAlert.style.display="block"}}const t=document.getElementById("inscription"),i=document.querySelector(".bground"),n=document.querySelectorAll(".modal-btn"),o=document.querySelector(".modal-body"),c=document.querySelector(".submitAlert"),r=document.querySelectorAll(".close"),a=document.getElementById("close-merci"),l=document.getElementById("iconNav");function s(){i.style.display="block",o.style.display="block",c.style.display="none"}function m(){i.style.display="none",c.style.display="none"}n.forEach((e=>e.addEventListener("click",s))),r.forEach((e=>e.addEventListener("click",m))),a.addEventListener("click",m),t.addEventListener("submit",(t=>{let i=document.getElementById("first").value,n=document.getElementById("last").value,o=document.getElementById("email").value,c=document.getElementById("birthdate").value,r=document.getElementById("quantity").value,a=new e(i,n,o,c,r);a.checkData(t),a.checkPrenom(),a.checkNom(),a.checkEmail(),a.checkDate(),a.checkParticipation(),a.checkRadio(),a.checkConditions(),a.checkData(t).then((e=>{a.checkValid(e)}))})),l.addEventListener("click",(function(){let e=document.getElementById("myTopnav");"topnav"===e.className?e.className+="responsive":e.className="topnav"}))}();