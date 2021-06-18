$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	});


var typed = new Typed(".typed", {
  strings: ["Software Developer", "Web Developer"],
  typeSpeed: 70,
  loop: true,
  startDelay: 1000,
  showCursor: false,
});


$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});


var skillsTopOffset= $(".skillsSection").offset().top;
//console.log(skillsTopOffset);
$(window).scroll(function(){

console.log(window.pageYOffset);
if(window.pageYOffset>skillsTopOffset-$(window).height()+200){


  $('.chart').easyPieChart({
      easing:'easeInOut',
      trackColor: false,
      scaleColor: false,
      barColor: '#fff',
      lineWidth: 4,
      size: 152,
      onStep(from, to, percent){
        $(this.el).find('.percent').text(Math.round(percent));
      }
  });

  

}


});
	

});






