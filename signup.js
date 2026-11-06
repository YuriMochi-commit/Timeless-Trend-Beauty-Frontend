// Get elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password-field");
const confirmPassword = document.getElementById("cpassword-field");
const registerButton = document.getElementById("register");
const loginIcon = document.querySelector(".bi-person-fill");
const logoutIcon = document.querySelector(".fa-right-from-bracket");
// Add event listeners
registerButton.addEventListener("click", registerUser);

// Register user function
function registerUser(event) {
  event.preventDefault();
  const userName = username.value.trim();
  const Email = email.value.trim();
  const pwd = password.value.trim();
  const confirmPwd = confirmPassword.value.trim();

  if (userName && Email && pwd && confirmPwd) {
    if (pwd === confirmPwd) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex = /^\d{6,}$/;

      if (emailRegex.test(Email) && passwordRegex.test(pwd)) {
        const userInfo = {
          username: userName,
          email: Email,
          password: pwd,
        };

        const userInfoJson = JSON.stringify(userInfo);

        localStorage.setItem("userInfo", userInfoJson);

        alert("Registration successful");
        loginIcon.classList.add("iconHide");
        logoutIcon.classList.remove("iconHide");
        location.href = "index.html";
      } else {
        loginIcon.classList.remove("iconHide");
        logoutIcon.classList.add("iconHide");

      }
    } else {
      alert("Passwords do not match");
    }
  } else {
    alert("Please fill out all fields");
  }
}

