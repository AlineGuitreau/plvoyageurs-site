/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#contact_btn1').click(function(){
    $('#portfolioModal1').modal('hide');
    $(document.body).scrollTop($('#contact').offset().top);
});

$('#contact_btn2').click(function(){
    $('#portfolioModal2').modal('hide');
    $(document.body).scrollTop($('#contact').offset().top);
});

function adaptHeader() {
  var windowHeight = $(window).height();
  if(windowHeight > 587) {
    $('header .container').css('padding-bottom', 50+(windowHeight-587)/2+'px');
    $('header .registration').css('padding-top', 200+(windowHeight-587)+'px');
  }
}

$(function() {
  adaptHeader();
});

$( window ).resize(adaptHeader);
$(document).ready(function() {
    $('.carousel1').carousel({
      interval: 4000
    })
    $('.carousel2').carousel({
      interval: 4000
    })
  });

