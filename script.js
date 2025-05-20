// Show confirmation when the contact form is submitted
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission for now
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
      } else {
        alert("Thank you for contacting ShoeXpress, " + name + "!");
        form.reset();
      }
    });
  }

  // Log when "Shop Now" button is clicked (optional)
  const shopNowButton = document.querySelector(".hero button");
  if (shopNowButton) {
    shopNowButton.addEventListener("click", () => {
      console.log("Shop Now button clicked.");
    });
  }
});
