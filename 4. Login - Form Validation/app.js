document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let errorMessages = [];

    // Validate first name
    const firstName = document.getElementById("first-name").value;
    if (!firstName) {
      isValid = false;
      document.getElementById("first-name-error").textContent = "";
      errorMessages.push("First name is required");
    } else {
      document.getElementById("first-name-error").textContent = "";
    }

    // Validate last name
    const lastName = document.getElementById("last-name").value;
    if (!lastName) {
      isValid = false;
      document.getElementById("last-name-error").textContent = "";
      errorMessages.push("Last name is required");
    } else {
      document.getElementById("last-name-error").textContent = "";
    }

    // Validate email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      document.getElementById("email-error").textContent = "";
      errorMessages.push("Valid email is required");
    } else {
      document.getElementById("email-error").textContent = "";
    }

    // Validate password
    const password = document.getElementById("new-password").value;
    const passwordPattern = /^[a-z0-5]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      isValid = false;
      document.getElementById("password-error").textContent = "";
      errorMessages.push(
        "Password must be at least 8 characters long and contain only lowercase letters and numbers"
      );
    } else {
      document.getElementById("password-error").textContent = "";
    }

    // Validate age
    const age = document.getElementById("age").value;
    if (age < 13 || age > 120) {
      isValid = false;
      document.getElementById("age-error").textContent = "";
      errorMessages.push("Age must be between 13 and 120");
    } else {
      document.getElementById("age-error").textContent = "";
    }

    // Validate terms and conditions
    const terms = document.getElementById("terms-and-conditions").checked;
    if (!terms) {
      isValid = false;
      errorMessages.push("You must accept the terms and conditions");
    }

    if (!isValid) {
      alert(errorMessages.join("\n"));
    } else {
      alert("Form is submitted succesfully");
    }
  });
