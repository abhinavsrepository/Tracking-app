(function () {
  emailjs.init("y2mOxqZV-7_0GwCAI"); // Replace with your actual public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send form data using EmailJS
    emailjs
      .send("service_25dsy57", "template_7p3qcdc", {
        from_name: name,
        email_id: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  });
