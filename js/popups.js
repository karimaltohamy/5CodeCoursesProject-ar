const btnAdd = document.querySelector(".btn_add");
const popupAdd = document.querySelector(".popup_add");
const btnCloseAdd = document.querySelector(".btn_close_add");
const inputsRadioMethod = document.querySelectorAll(".input_radio_method");
const inputCash = document.querySelector(".input_cash");

btnAdd.addEventListener("click", () => {
  popupAdd.classList.add("active");
  overflow.classList.add("active");
});

btnCloseAdd.addEventListener("click", () => {
  popupAdd.classList.remove("active");
  overflow.classList.remove("active");
});

// input_radio_method
inputsRadioMethod.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.getAttribute("data-method") === "visa") {
      inputCash.classList.remove("active");
    } else if (radio.getAttribute("data-method") === "cash") {
      inputCash.classList.add("active");
    }
  });
});
