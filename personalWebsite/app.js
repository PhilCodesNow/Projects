let carouselIndex = 0;

function plusSlides(n){
    showSlides(carouselIndex += n);
}

let slides = document.getElementsByClassName('slide');



function showSlides(n){
    console.log(slides)
    console.log('length' + slides.length)
    console.log('carouselIndex = ' + carouselIndex)
    if(carouselIndex > slides.length - 1){
        carouselIndex = 0;
    }else if(carouselIndex < 0){
        carouselIndex = slides.length - 1;
 }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    // slides[carouselIndex].style.display = "none";
    slides[carouselIndex].style.display = "block";
}


showSlides(carouselIndex)