const mainContainer = document.querySelector(".container");
const qrBtn = mainContainer.querySelector(".form button");
const qrInput = mainContainer.querySelector(".form input");
const qrImg = mainContainer.querySelector(".qr-code img");
const clearBtn = mainContainer.querySelector('.form #clearBtn');

clearBtn.addEventListener('click',() => {
  if(!qrInput.value) return;
  else {
    qrInput.value = '';
    mainContainer.classList.remove("active");
  }
})

qrBtn.addEventListener("click", () => {
  let _value = qrInput.value;
  if (!_value) {
    alert("Enter url or text!!!");
  } else {
    qrImg.src = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=350x350&chl=${_value}`;
    mainContainer.classList.toggle("active");
  }
});

