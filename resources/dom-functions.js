$(document).ready(() => {
  $("#secret-button").on("click", () => {
    $("#secret-image").toggle("slow")
      // .css({
      //   display: "inline-flex",
      //   height: "300px",
      //   width: "400px",
      //   boxShadow: "25px 25px 15px gray",
      // });
  });
  $('.rayray').on('change', function () {
      let day = new Date().getDay();
      if (day === 6) {
          $('.rayray').toggle('slow')
      }
    })


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