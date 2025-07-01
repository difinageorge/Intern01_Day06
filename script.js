  // 📬 Form submission with validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");
  
    let valid = true;
  
    // 🔄 Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';
  
    // 🧪 Regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // 🧍 Name validation
    if (!name.value.trim()) {
      nameError.textContent = "Name is required.";
      valid = false;
    }
  
    // 📧 Email validation
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Invalid email format.";
      valid = false;
    }
  
    // 📝 Message validation
    if (!message.value.trim()) {
      messageError.textContent = "Message is required.";
      valid = false;
    }
  
    // ✅ Show success message if valid
    if (valid) {
      successMessage.textContent = "Form submitted successfully!";
      this.reset(); // Clear form fields
    }
  });
  