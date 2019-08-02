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

// var original=document.getElementById("intro1").textContent;
// var edited=original.replace('Omnifood','Alpher');
// document.getElementById("intro1").textContent=edited;
var wintop     = $(window).scrollTop();
var winbottom= wintop+$(window).height();
var element1 = document.querySelector('.init');
var element2 = document.querySelectorAll('.initial'); // Identify target
var firstelement=document.querySelector('#bg-text');
var subtitles=document.querySelector('.getfoodfast');
window.addEventListener('scroll', function(event) { // To listen for event
    // event.preventDefault();

    if (window.scrollY >= ($(firstelement).height()))
    { // Just an example
      console.log()
        element1.style.backgroundColor = 'white';
        element2.forEach(element => {
       element.style.color='#000000'; 
        // element.addClass('animated fadeInUp');
        });
        // or default color
    } else {
        element1.style.backgroundColor = 'transparent';
        element2.forEach(element => {
          element.style.color='#000000'; 
         });

    }
});
function animate1(elementclass,animation1 )
{
var element3 = document.querySelectorAll(elementclass);
var element4 = document.querySelector('.init');
window.addEventListener('scroll', function(event) {
  element3.forEach(element => {
    var wintop     = $(window).scrollTop();
    var winheight=$(window).height();
    var winbottom= wintop+winheight;
    console.log(winbottom);
    const navheight=$(element4).height();
    var eletop = $(element).offset().top;
   
    var elebottom=eletop +(2*$(element).height());
    console.log(elebottom);
      if(eletop>(wintop) && elebottom<(winbottom/*-(2*navheight)*/))
     { element.style.opacity=1;
      $(element).addClass(animation1); 
      
      
      //  console.log("yes");
    }
     else
     
    {  
   
      element.style.opacity=0;
       
      $(element).removeClass(animation1);

      //  console.log($(window).width());
      //   console.log("no");
      }

})
});
}
function animatewithoutopacity(elementclass,animation1,animation2 )
{
var element3 = document.querySelectorAll(elementclass);
var element4 = document.querySelector('.init');
window.addEventListener('scroll', function(event) {
  element3.forEach(element => {
    var wintop     = $(window).scrollTop();
    var winheight=$(window).height();
    var winbottom= wintop+winheight;
    console.log(winbottom);
    const navheight=$(element4).height();
    var eletop = $(element).offset().top;
   
    var elebottom=eletop +($(element).height());
    console.log(elebottom);
      if(eletop>( /*(navheight)/4+*/ wintop) && elebottom<(winbottom/*-(2*navheight)*/))
     { 
      $(element).removeClass(animation2); 
      $(element).addClass(animation1);
      
      
    }
     else
    {  
      $(element).removeClass(animation1); 
      $(element).addClass(animation2);

      }

})
});
}
animate1('.getfoodfast','animated fadeInUp');
animate1('.parts','animated fadeInRight');
animate1('.storelinks','animated fadeInUp');


/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("spanicon").style.display='block';
}function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("spanicon").style.display='none';
}
// $(document).ready(function()
// {
//   closeNav();
// })
/* Set the width of the side navigation to 0 */
