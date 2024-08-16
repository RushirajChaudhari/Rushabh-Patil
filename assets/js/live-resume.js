// Toggle the navigation bar visibility
// $('[data-toggle="collapsible-nav"]').on('click', function(e){
//     var target = $(this).data('target');
//     $('#' + target).toggleClass('show');
//     console.log('Toggle clicked, target:', target);
//     console.log('Navigation classes:', $('#' + target).attr('class'));
// });

// new one 
const navToggleBtn = document.querySelector('.btn-menu-toggle')
const collapsibleNav = document.getElementById('collapsible-nav')

navToggleBtn.addEventListener('click', () => {
  collapsibleNav.classList.toggle('show')
})



$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  // Show navigation menu on larger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(function() {
    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max($(this).width(), $(this).height()) * 2 + 50;
        }
    });
}

var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ // Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); // Add mouse in animation.

    }, 
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); // Add mouse out animation.
    }
);
