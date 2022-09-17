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

  $('.zacky').on('click', () => {
      $('#zack-caption').html(function() {
          return '<h3 id="zack-caption">&#127752;<i>I Love Twinks!!!</i>&#127828;</h3>';

      });

  })

  // $('.textbox').delay(500).animate({top:'18'}, 700);



  if (date === 5) {
      $('.rayray').text("Happy Ray Ray Friday!")
  } else {
      $('.rayray').text(`Alert: ${daysToRayRay} days until Ray Ray Friday!`)

  }

  function pulse() {
      //$('.rayray').fadeIn(300).fadeOut(600)
      $('.rayray').slideToggle();
  }
  setInterval(pulse, 1500)




});

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-image');

let buttonText = buttonElement.textContent || buttonElement.innerText;

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