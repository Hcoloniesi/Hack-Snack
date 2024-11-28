const slider = document.querySelectorAll('.siderS')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentsSlide = 0

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentsSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentsSlide == slider.length -1) {
        currentsSlide = 0
    } else {
        currentsSlide ++
    }
    showSlider()
}
function prevSlider() {
    hideSlider()
    if(currentsSlide == 0) {
        currentsSlide = slider.length -1
    } else {
        currentsSlide --
    }
    showSlider()
}


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

