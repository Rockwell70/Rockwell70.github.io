// import * as fs from 'fs'
// import * as readline from 'readline'

$(document).ready(function() {
  let marquee = $('div.rayrayd');
  console.log(marquee);
  marquee.each(function() {
    let mar = $(this),indent = mar.width();
    mar.marquee = function() {
      indent--;
      mar.css('text-indent',indent);
      if (indent < -1 * mar.children('div.rayray').width()) {
        indent = mar.width();
      }
    };
    mar.data('interval',setInterval(mar.marquee,1000/600));
  });
});

$(document).ready(() => {
  let date = new Date().getDay();
  let daysToRayRay = 0;
  date > 5 ? (daysToRayRay = date) : (daysToRayRay = 5 - date);
  // let daysToRayRay = Math.abs(date - 7);



    $("#secret-button").on("click", () => {
    $("#secret-image").toggle("slow");
  });
  $(".rayray").css({
    color: "red",
    // display: "inline-flex",
    // position: "absolute",
    // textAlign: "center",
  });

  $(".poochie").css({
    height: "300px",
    width: "300px",
    paddingLeft: "100px",
  });

  $(".zacky").on("click", () => {
    $("#zack-caption").html(function () {
      const num = Math.floor(Math.random() * 3);
      switch (num) {
        case 0:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;"><i>You look like you need a popper!</i>&#128138;</h3>';
        case 1:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;">&#128562;<i>That feels weird.</i>&#129312;</h3>';
        case 2:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;">&#9939;<i>Wonder if this straight guy is enjoying this as much as me?.</i>&#129300;</h3>';
      }
    });

  });

  // $('.textbox').delay(500).animate({top:'18'}, 700);

  if (date === 5) {
    $(".rayray").text("Happy Ray Ray Friday!\nWhat would Tupac do today?");
  } else if (date === 4) {
    $(".rayray").text(`Alert: ${daysToRayRay} day until Ray Ray Friday!`);
  } else {
    $(".rayray").text(`Alert: ${daysToRayRay} days until Ray Ray Friday!`);
  }

  // function pulse() {
  //   $(".rayray").toggle();
  // }
  // setInterval(pulse, 1500);
});

// $(document).on("scroll", function() {
//   let pixels = $(document).scrollTop();
//   let pageHeight = $(document).height() - $(window).height();
//   let progress = 100 * pixels / pageHeight;
//
//   $("div.progress").css("width", progress + "%");
// })

// const toggleHiddenElement = (domElement) => {
//   if (domElement.style.display === "none") {
//     domElement.style.display = "block";
//   } else {
//     domElement.style.display = "none";
//   }
// };

// buttonElement.addEventListener("click", () => {
//   toggleHiddenElement(imgElement);
// });
