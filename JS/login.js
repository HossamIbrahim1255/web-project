const emailInput = document.getElementById("email");
    const passInput = document.getElementById("password");
    const submitBtn = document.querySelector("button[type='submit']");
    const passIcons = document.querySelectorAll(".pass-icon");

    // Alerts
    const lengthAlert = document.querySelector(".invalid-length");
    const blankAlert = document.querySelector(".blank-error");
    const emailAlert = document.querySelector(".invalid-email");

    let inputs = [emailInput, passInput];

    submitBtn.addEventListener("click", (e) => {

      inputs.forEach(input => {
        checkBlank();
        checkpassword(input);
        validateEmail();
      })

      // All Are Valid?
      let alerts = document.querySelectorAll(".invalid.show");
      if (alerts.length !== 0) {
        e.preventDefault();
      }
    })


    function validateEmail() {
      let email = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let valid = emailRegex.test(email);
      if (valid)
        emailAlert.classList.remove("show");
      else emailAlert.classList.add("show")
    }


    function checkpassword(element) {
      // Check password length
      if (element.type === "password" && element.value.length < 12)
        lengthAlert.classList.add("show");
      else lengthAlert.classList.remove("show");
    }

    function checkBlank() {
      let isBlank = false;
      inputs.forEach(input => {
        if (input.value.trim() === "")
          isBlank = true;
      });

      if (isBlank)
        blankAlert.classList.add("show");
      else
        blankAlert.classList.remove("show");
    }



    // Toggle Type Of Input
    passIcons.forEach(icon => {
      icon.addEventListener("click", () => togglePass(icon));
    })

    function togglePass(element) {
      let input = element.previousElementSibling, type;
      if (input.type === "text")
        type = "password";
      else type = "text";
      input.setAttribute("type", type);
    }

