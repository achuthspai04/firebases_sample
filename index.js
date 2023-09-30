document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Form submission handling (replace with your server-side logic)
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Here you can add code to send form data to a server
  
      // Display a confirmation message
      const confirmation = document.createElement("p");
      confirmation.textContent = "Thank you for your message! I'll get back to you soon.";
      confirmation.classList.add("confirmation-message");
      form.parentNode.insertBefore(confirmation, form);
      form.reset();
    });
  });
  