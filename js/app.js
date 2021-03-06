$(document).ready(function () {
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "150px",
    }
  );

  // Buttons
  $(".js--btn-full").click(function () {
    $("html,body").animate({ scrollTop: $(".js--plan").offset().top }, 2000);
  });

  $(".js--btn-ghost").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  // Animate Css

  let getAnimation = (number, animationName) => {
    $(`.js--wp-${number}`).waypoint(
      function (direction) {
        $(`.js--wp-${number}`).addClass(`animated ${animationName}`);
      },
      {
        offset: "50%",
      }
    );
  };

  getAnimation(1, "animate__fadeIn");
  getAnimation(2, "animate__fadeInLeft");
  getAnimation(3, "animate__bounceInRight");

  //Mobile Navbar

  $(".js--mobile--nav-icon").click(function () {
    $(".main-nav").slideToggle(200);

    if ($(".js--mobile--nav-icon i").hasClass("fa-bars")) {
      $(".js--mobile--nav-icon i").removeClass("fa-bars");
      $(".js--mobile--nav-icon i").addClass("fa-times");
    } else {
      $(".js--mobile--nav-icon i").removeClass("fa-times");
      $(".js--mobile--nav-icon i").addClass("fa-bars");
    }
  });

  //Scroll smooth from css-tricks/snippet
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
