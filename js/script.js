$("#start-screen-button").click(function(){
    $('html, body').animate({
        scrollTop: $('.furniture').position().top+'px'
       }, 800)
        console.log('it works?')

})
console.log(document.getElementById('start-screen-button'))
console.log(document.getElementsByClassName('second-section-block furniture'))
/*function hover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
  }*/


$('.nav__menu').click(function(event){
    $('body , .nav__menu-burger').toggleClass('active');})
$('.nav__language').hover(function(event){
    $('.nav__language').toggleClass('language-active');
})




document.documentElement.addEventListener('touchmove', function (event) {
  event.preventDefault();      
}, false);

