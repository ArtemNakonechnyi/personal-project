const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLoginPopup");
const iconClose = document.querySelector(".icon-close");

function handleRegisterLinkClick() {
  wrapper.classList.add("active");
}

function handleLoginLinkClick() {
  wrapper.classList.remove("active");
}

function handleBtnPopupClick() {
  wrapper.classList.add("active-popup");
}

function handleIconCloseClick() {
  wrapper.classList.remove("active-popup");
}

export {
  handleRegisterLinkClick,
  handleLoginLinkClick,
  handleBtnPopupClick,
  handleIconCloseClick,
};
