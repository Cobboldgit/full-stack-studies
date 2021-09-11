var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = [ 'img/img0.jpg', 'img/img19.jpg', 'img/img21.jpg', 'img/img23.jpg', 'img/img25.jpg', 'img/img28.jpg']

let i = 0;

//next btn
next.addEventListener('click', function () {

   i++;

   if (i > arr.length - 1) {
    i = 0;
   }
    document.getElementById('image').src = arr[i];
})

//prev btn
prev.addEventListener('click', function () {
   
    i--;

    if (i < 0 ) {
        i = arr.length - 1
    }
 
    document.getElementById('image').src = arr[i];
})