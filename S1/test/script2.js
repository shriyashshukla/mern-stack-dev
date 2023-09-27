// Wait for the DOM to be ready
$(document).ready(function() {
    // Handle form submission
    $("#contact-form").submit(function(event) {
      event.preventDefault();
  
      // Get form data
      const formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
      };
  
      // Perform any desired action with the form data here
      // For this example, let's just log the data to the console
      console.log(formData);
  
      // Optionally, you can display a success message or redirect the user after form submission
      alert("Message sent successfully!");
      // window.location.href = "thank-you.html";
    });
  });
  