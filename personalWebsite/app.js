let carouselIndex = 0;

function plusSlides(n){
    showSlides(carouselIndex += n);
}

let slides = document.getElementsByClassName('slide');



function showSlides(n){
    console.log(slides)
    console.log('length' + slides.length)
    console.log('n' + n)
    if(n > slides.length){
        slideIndex = 0;
    }else if(n < 0){
        slideIndex = slides.length;
 }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    // slides[carouselIndex].style.display = "none";
    slides[carouselIndex].style.display = "block";
    
}


showSlides(carouselIndex)