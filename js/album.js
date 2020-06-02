var index=1;
showSlides(index);

function plusSlides(n){
  showSlides(index += n); <!--n is either 1 or -1-->
}

function currentSlide(n){
  showSlides(index = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("gallery-slides");
  var previewDemo = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if(n> slides.length){
    index = 1;
  }
  if(n<1){
    index = slides.length;
  }

  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i=0; i<previewDemo.length; i++){
    previewDemo[i].className = previewDemo[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  previewDemo[index-1].className += " active";
  captionText.innerHTML = previewDemo[index-1].alt;
}
