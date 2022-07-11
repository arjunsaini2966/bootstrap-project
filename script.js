const customModal = document.querySelector(".custom-modal");
const btns = Array.from(document.querySelectorAll(".open-form-btn"));
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  customModal.classList.toggle("show-modal");
}

btns.map((btn) => {
  btn.addEventListener("click", toggleModal);
});
closeButton.addEventListener("click", toggleModal);

function rangeValue(price) {
  console.log(price);

  document.getElementById("range").innerHTML = price;
  if (price >= 0 && price <= 10) {
    document.querySelector(".high-free").classList.add("spotlight");
    document.querySelector(".high-pro").classList.remove("spotlight");
    document.querySelector(".high-enterprise").classList.remove("spotlight");
  } else if (price >= 10 && price <= 20) {
    document.querySelector(".high-pro").classList.add("spotlight");
    document.querySelector(".high-free").classList.remove("spotlight");
    document.querySelector(".high-enterprise").classList.remove("spotlight");
  } else {
    document.querySelector(".high-enterprise").classList.add("spotlight");
    document.querySelector(".high-pro").classList.remove("spotlight");
    document.querySelector(".high-free").classList.remove("spotlight");
  }
}
