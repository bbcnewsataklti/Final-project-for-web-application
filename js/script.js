// Image slider for homepage
const images = ["image/A.jpg", "image/Ab.jpg", "image/Abc.jpg"];
let index = 0;
const slider = document.getElementById("sliderImage");

if (slider) {
  setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  }, 3000);
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();

      if (!name || !email) {
        e.preventDefault();
        alert("Please fill in all fields.");
      }
    });
  }
});
