$(document).ready(() => {
    let date = new Date().getDay();
    let daysToRayRay = Math.abs(date - 6);
  $("#secret-button").on("click", () => {
    $("#secret-image").toggle("slow")
      // .css({
      //   display: "inline-flex",
      //   height: "300px",
      //   width: "400px",
      //   boxShadow: "25px 25px 15px gray",
      // });
  });
  $(".rayray").css({
    color: "red",
    display: "inline-flex",
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: "400",
  });

  if (date === 5) {
      $('.rayray').text("Happy Ray Ray Friday!")
  } else {
      $('.rayray').text(`Alert: ${daysToRayRay} days until Ray Ray Friday!`)

  }

  function pulse() {
      $('.rayray').fadeIn(300).fadeOut(500)
  }
  setInterval(pulse, 1500)

    $('.poochie').css({height: '400px',
    width: '400px'})


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