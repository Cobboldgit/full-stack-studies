let images = [
  "./01.jpg",
  "./02.jpg",
  "./03.jpg",
  "./04.jpg",
  "./05.jpg",
  "./06.jpg",
  "./07.jpg",
];

let nextbtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let num = 0;

//function for next button
nextbtn.addEventListener(
  "click",
  (NextBtnFunc = () => {
    //loop through the images array
    let image = document.getElementById("image");
    num++;
    if (num >= images.length) {
      num = 0;
    }

    image.src = images[num];
  })
);

prevBtn.addEventListener(
  "click",
  (PrevBtnFunc = () => {
    //loop through the images array
    let image = document.getElementById("image");
    num--;
    if (num < 0) {
      num = images.length - 1;
    }

    image.src = images[num];
  })
);

let validation = () => {
  let n = document.getElementById("name");
  let e = document.getElementById("email");

  let names = n.value;
  let email = e.value;

  if (names != "" && email != "") {
    if (names == email) {
      
    }
  }

//   alert("The values should be equal");
  return false;
};
