// $(document).ready(function(){
//   $('h1').click(function()
//   {
//       $('h1').css("background-color",'yellow');
//   });  
// });
// $(document).ready(function(){
//     $('nav').click(function()
//     {
//         $('nav').addClass('sticky');
//     });  
//   });

var original=document.getElementById("intro1").textContent;
var edited=original.replace('Omnifood','Alpher');
document.getElementById("intro1").textContent=edited;
var element1 = document.querySelector('.init');
var element2 = document.querySelectorAll('.initial'); // Identify target
var firstelement=document.querySelector('#bg-text');
var subtitles=document.querySelector('.getfoodfast');
window.addEventListener('scroll', function(event) { // To listen for event
    // event.preventDefault();

    if (window.scrollY >= ($(firstelement).height()/7) )
    { // Just an example
        element1.style.backgroundColor = 'white';
        element2.forEach(element => {
        // element.style.color='#000000'; 
        element.addClass('animated fadeInUp');
        });
        // or default color
    } else {
        element1.style.backgroundColor = 'transparent';
        element2.forEach(element => {
          element.style.color='#000000'; 
         });

    }
});
var element3 = document.querySelectorAll('.getfoodfast');
window.addEventListener('scroll', function(event) {
  element3.forEach(element => {
    var wintop     = $(window).scrollTop();
    var winbottom= wintop+$(window).height();
    console.log(winbottom);

    var eletop = $(element).offset().top;
   
    var elebottom=eletop +(2*$(element).height());
    console.log(elebottom);
      if(eletop>wintop && elebottom<=winbottom)
     { element.addClass("fadeInUp");
    }
    // else
    // {
    //     element.removeClass("animated fadeInUp"); 
    // }

})
});


/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("spanicon").style.display='block';
}function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("spanicon").style.display='none';
}

/* Set the width of the side navigation to 0 */
