
let splide = new Splide( '#baner' );
    splide.mount();

let splide2 = new Splide( '#slid-testimonial', {
    type   : 'loop',
    padding: '25%',
    pagination: false,
  }  );
    splide2.mount();

function allService(non = true) {
    let div = document.querySelectorAll('[data-project-type]')
    if (non) {
        for (let e of div) {
            e.classList.add('d-none')
        }
    } else {
        for (let e of div) {
            e.classList.remove('d-none')
        } 
    }
    
    
}

function serviceSort(arg) {
    allService()
    let selectDivs = document.querySelectorAll(`[data-project-type='${arg}']`)
    
    for(let e of selectDivs){
        e.classList.remove('d-none')
    }
}