

let slideIndex = 1

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline";
  slides[slideIndex-1].style.width = "50px%";
  slides[slideIndex-1].style.margin = "2% auto 2% auto";
  

  slides[slideIndex-2].style.display = "inline";
  slides[slideIndex-2].style.width = "50px";

  slides[slideIndex].style.display = "inline";
  slides[slideIndex].style.width = "50px%";
}

window.onload = plusSlides(1)

