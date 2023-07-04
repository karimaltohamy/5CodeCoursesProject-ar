const btnAdd = document.querySelector(".btn_add");
const popupAdd = document.querySelector(".popup_add");
const btnCloseAdd = document.querySelector(".btn_close_add");
// const overflow = document.querySelector(".overflow");

btnAdd.addEventListener("click", () => {
  popupAdd.classList.add("active");
  overflow.classList.add("active");
});

btnCloseAdd.addEventListener("click", () => {
  popupAdd.classList.remove("active");
  overflow.classList.remove("active");
});
