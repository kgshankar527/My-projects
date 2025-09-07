function data() {
      var a = document.getElementById("n1").value; // user id
      var email = document.getElementById("email").value; // email
      var b = document.getElementById("n2").value; // contact
      var c = document.getElementById("n3").value; // password
      var d = document.getElementById("n4").value; // confirm password
      
      // ✅ Email Regex
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // ✅ Password Regex (8 char, 1 upper, 1 lower, 1 number, 1 special)
      var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      // Empty fields check
      if (a == "" || email == "" || b == "" || c == "" || d == "") {
          alert("⚠️ All fields are required");
          return false;
      }
      // Email validation
      else if (!emailPattern.test(email)) {
          alert("⚠️ Please enter a valid Email (example@gmail.com)");
          return false;
      }
      // Contact validation
      else if (b.length != 10 || isNaN(b)) {
          alert("⚠️ Contact must be exactly 10 digits (only numbers)");
          return false;
      }
      // Password strength check
      else if (!passPattern.test(c)) {
          alert("⚠️ Password must be at least 8 characters long\nInclude: 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character");
          return false;
      }
      // Confirm password check
      else if (c != d) {
          alert("⚠️ Passwords do not match");
          return false;
      }
      else {
          alert("✅ Form submitted successfully!");
          return true;
      }
                }
