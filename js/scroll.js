$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// EFECTOS EN SCROLL 
function isScrolledIntoView(elem, hg) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height() - hg;

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.tokenomics-card').each(function () {
        if (isScrolledIntoView(this, 100) === true) {
            $(this).addClass('animate__animated animate__fadeInUp');
        }
    });
});

$(window).scroll(function () {
  $('.roadmap-step').each(function () {
      if (isScrolledIntoView(this,400) === true) {
          $(this).addClass('animate__animated animate__fadeInLeft');
      }
  });
});
