document.querySelectorAll('.container-slider').forEach(sliderContainer => {
    const sliders = sliderContainer.querySelectorAll('.slider, .sliderS');
    const btnPrev = sliderContainer.querySelector('.prev-button');
    const btnNext = sliderContainer.querySelector('.next-button');
    
    let currentSlide = 0;

    function hideSliders() {
        sliders.forEach(item => item.classList.remove('on', 'ons'));
    }

    function showSlider() {
        sliders[currentSlide].classList.add(sliders[currentSlide].classList.contains('slider') ? 'on' : 'ons');
    }

    function nextSlider() {
        hideSliders();
        currentSlide = (currentSlide + 1) % sliders.length;
        showSlider();
    }

    function prevSlider() {
        hideSliders();
        currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
        showSlider();
    }

    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);
});

// Agora os sliders de lanches e sorvetes compartilham a mesma lógica!
