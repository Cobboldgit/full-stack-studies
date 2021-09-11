
// function clickme() {
//     const load = document.querySelector('.load')
//     let array = [100 + '%']

    
    
//     // for (let i = array; i < array.length; i += array[0]) {
//     //     let element = array[i]
        
//     // }

//     array.forEach(element => {
//         load.style.width = element
//         load.style.innerHtml = width
//     });
// }

// function backclickme() {
//     const load = document.querySelector('.load')
//     let array = ['10%', '20%']
    
    
//         array.forEach(element => {
//             load.style.width = element
//         });
    
// }

function clickme() {
    let i = 0;
    if (i == 0) {
        i = 1;
        const load = document.querySelector('.load');
        let width = 10; 
        let interval = setInterval(frame, 20);

        function frame() {
            if (width >= 100) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                load.style.width = width + '%';
                load.innerHTML = width + '%';
            }
        }
    }
}


