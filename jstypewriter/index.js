let texts = [
  " Web App Developer",
  " Mobile App Developer",
  " Graphic Designer",
];
let count = 0;
let index = 0;
let CurrentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }

  CurrentText = texts[count];
  letter = CurrentText.slice(0, ++index);

  document.querySelector(".typing").innerHTML = letter;
  if (letter.length === CurrentText.length) {
    count++;
    index = 0;
  }
}

setInterval(type, 400);


function handleNavbar() {
    document.querySelector(".navbar").style.height = "355px"
    document.querySelector(".nav-icon").style.opacity = "0"
}
