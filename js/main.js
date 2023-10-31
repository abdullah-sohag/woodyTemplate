// slider
let splide = new Splide( '#baner' );
    splide.mount();

let splide2 = new Splide( '#slid-testimonial', {
    type   : 'loop',
    padding: '25%',
    pagination: false,
  }  );
    splide2.mount();
// -/ slider

// service sortintg
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
// -/service sortintg

// counter

const box = document.getElementById('box');


const callbackFunction = function(entries) {
    if(!entries[0].isIntersecting){
        return;
    }else{

        let counterItems = document.querySelectorAll('.naum');
        let intervel = 1500;

        for (let i of counterItems) {
            let startCount = 0
            let endCount = parseInt(i.getAttribute('data-count'))
            let duration = Math.floor(intervel/endCount)
            let counter = setInterval(function(){
                startCount+=1;
                i.innerHTML = startCount
                if (startCount == endCount) {
                    clearInterval(counter)
                }
            },duration)
            
        }
        observer.unobserve(box);
        
    }
}

const observer = new IntersectionObserver(callbackFunction,{
    threshold:1
    
});

observer.observe(box);
 


// -/counter

// type animation
let type = new Typed(
    '.txt-anim',
    {
        strings:[
            'Our Service',
            'Best Service',
            'Animated Service'
        ],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    }
)
// -/type animation

// aos
AOS.init();
// -/aos

// tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 400
});


// -/tilt