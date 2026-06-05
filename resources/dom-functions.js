// import * as fs from 'fs'
// import * as readline from 'readline'

// $(document).ready(function() {
//   let marquee = $('div.rayrayd');
//   console.log(marquee);
//   marquee.each(function() {
//     let mar = $(this),indent = mar.width();
//     mar.marquee = function() {
//       indent--;
//       mar.css('text-indent',indent);
//       if (indent < -1 * mar.children('div.rayray').width()) {
//         indent = mar.width();
//       }
//     };
//     mar.data('interval',setInterval(mar.marquee,1000/600));
//   });
// });

$(document).ready(() => {
  // let date = new Date().getDay();
  // let daysToRayRay = 0;
  // date > 5 ? (daysToRayRay = date) : (daysToRayRay = 5 - date);
  // let daysToRayRay = Math.abs(date - 7);



    $("#secret-button").on("click", () => {
    $("#secret-figure").toggle("slow");
    $("#secret-image-text").toggle('slow');
  });
    $("#forbidden-button").on("click", () => {
      $("#forbidden-button-message").toggle("slow");
    })
    

  $("#poochie").css({
    display: "flex",
    height: "300px",
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    position: "static",
    // boxShadow: "10px 10px 5px darkgray"

  });
  
  

  $("#poochie2").css({
    display: "flex",
    height: "300px",
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    position: "static",

  });



  $(".zacky").on("click", () => {
    $("#zack-caption").css({textWrap: "balance"}).html(function () {
      const num = Math.floor(Math.random() * 4);
      switch (num) {
        case 0:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;"><i>You look like you need a popper!</i>&#128138;</h3>';
        case 1:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;">&#128562;<i>That feels weird.</i>&#129312;</h3>';
        case 2:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;">&#9939;<i>Wonder if this straight guy is enjoying this as much as me?.</i>&#129300;</h3>';
        case 3:
          return '<h3 id="zack-caption" style="color:#038C25; text-shadow: none;">&#9939;<i>Did I spray tan my nuts?.</i>&#129300;</h3>';
      }
    });

  });


  // if (date === 5) {
  //   $(".rayray").text("Happy Ray Ray Friday! My man got all KINDS a plans!!")
  // } else if (date === 4) {
  //   $(".rayray").text(`Alert: ${daysToRayRay} day until Ray Ray Friday!`);
  // } else {
  //   $(".rayray").text(`Alert: ${daysToRayRay} days until Ray Ray Friday!`);
  // }

});

function daysToFriday() {
    const currentDay = new Date().getDay();
    let daysToRayRay = 0;
    currentDay > 5 ? (daysToRayRay = currentDay) : (daysToRayRay = 5 - currentDay);

    const rayRayText = document.querySelector(".rayray")

    if (currentDay === 5) {
        rayRayText.textContent = "Happy Ray Ray Friday! My man got all KINDS a plans!!"
    } else if (currentDay === 4) {
        rayRayText.textContent = `Alert: ${daysToRayRay} day until Ray Ray Friday!`
    } else {
        rayRayText.textContent = `Alert: ${daysToRayRay} days until Ray Ray Friday!`
    }
}

daysToFriday()