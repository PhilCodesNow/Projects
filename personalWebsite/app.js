
/////////////////////// Favorite Projects Carousel
let carouselIndex = 0;

function plusSlides(n){
    showSlides(carouselIndex += n);
}

let slides = document.getElementsByClassName('slide');

function showSlides(n){
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


//////////////////// Typewriter Animation
const typewriterTextName = "Hi there. I'm Philip Mayo"
const typewriterTextTitle = " I'm a Fullstack Software Developer";
let shownTextName = ''
let shownTextTitle = ''
let textN = 0;
let textT = 0;



function setTypewriterTitleLoop (){
    $('#title_typewriter_title').text(shownTextTitle)
    setTimeout(setTypewriterTitle, 160)
}


function setTypewriterTitle () {
    if(textT < typewriterTextTitle.length){
        shownTextTitle += typewriterTextTitle.charAt(textT)
        textT++
        setTypewriterTitleLoop()
    } 
    
}
setTimeout(setTypewriterTitle, 5000)


function setTypewriterLoop (){
    $('#title_typewriter_name').text(shownTextName)
    setTimeout(setTypewriter, 175)
}


function setTypewriter () {

    if(textN < typewriterTextName.length){
        shownTextName += typewriterTextName.charAt(textN)
        textN++
        setTypewriterLoop()
    } 
    
}
setTypewriter()