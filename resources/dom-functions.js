// import * as fs from 'fs'
// import * as readline from 'readline'

$(document).ready(() => {
    let date = new Date().getDay();
    let daysToRayRay = 0;
    date > 5 ? daysToRayRay = date : daysToRayRay = 5 - date;
    // let daysToRayRay = Math.abs(date - 7);
  $("#secret-button").on("click", () => {
    $("#secret-image").toggle("slow")
  });
  $(".rayray").css({
    color: "red",
    display: "inline-flex",
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: "500px",
  });

  $(".poochie")
      .css({
    height: "300px",
    width: "300px",
    paddingLeft: "100px",
  });

  $(".progressBar").css({
    position: "fixed",
    top: "0",
    left: "0",
    height: "8px",
    background: "linear-gradient(to right, #ff5f6d, #ffc371)",
    width: "0%",
    zIndex: "100",
    transition: "width 0.2s ease-out"
  })

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
      $('.rayray').text("Happy Ray Ray Friday!\nWhat would Tupac do today?")
  } else if (date === 4) {
      $('.rayray').text(`Alert: ${daysToRayRay} day until Ray Ray Friday!`)
  } else {
      $('.rayray').text(`Alert: ${daysToRayRay} days until Ray Ray Friday!`)
  }

  function pulse() {
      $('.rayray').toggle();
  }
  setInterval(pulse, 1500)

});

const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

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