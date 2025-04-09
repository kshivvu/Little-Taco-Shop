// script.js

document.getElementById("contact-form").addEventListener("submit", sendEmail);

function sendEmail(e) {
  e.preventDefault(); // prevent page reload

  emailjs.send("service_jwy1o7h", "template_lr55v1w", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    alert("Your message has been sent!");
  }, function(error) {
    console.error("FAILED...", error);
    alert("Oops! Something went wrong.");
  });
}
