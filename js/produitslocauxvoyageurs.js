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

$(document).ready( function () {
    // I only have one form on the page but you can be more specific if need be.
    var $form = $('form');

    if ( $form.length > 0 ) {
        $('form input[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            if ( validate_input($form) ) { register($form); }
        });
    }
});

function validate_input($form) {
  if($('#mce-EMAIL').val() == "" || $('#mce-EMAIL').val() === undefined) {
    return false;
  }
  if($('#mce-FNAME').val() == "" || $('#mce-FNAME').val() === undefined) {
    return false;
  }
  if($('#mce-LNAME').val() == "" || $('#mce-LNAME').val() === undefined) {
    return false;
  }
  if($('#mce-MMERGE3').val() == "" || $('#mce-MMERGE3').val() === undefined) {
    return false;
  }
  return true;
}

function register($form) {
    $('#registrationModal').modal('show');
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) {
          $('#waitRegistration').hide();
          $('#errorRegistration').show();
        },
        success     : function(data) {
            if (data.result != "success") {
              $('#waitRegistration').hide();
              $('#warningRegistration').show();
            } else {
              $('#waitRegistration').hide();
              $('#successRegistration').show();
            }
        }
    });
}

$( window ).resize(adaptHeader);
$(document).ready(function() {
    $('.carousel1').carousel({
      interval: 4000
    })
    $('.carousel2').carousel({
      interval: 4000
    })
  });
