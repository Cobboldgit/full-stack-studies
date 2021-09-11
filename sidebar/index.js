
const sidebar = document.getElementsByClassName('sidebar')


function closeNav() {
    console.log('close');
    sidebar[0].style.width = "0px"
}

function openNav() {
    sidebar[0].style.width = "250px"
}