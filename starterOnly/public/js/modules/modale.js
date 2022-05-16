const modalForm = document.getElementById("inscription");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const iconNav = document.getElementById("iconNav");

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