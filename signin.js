// Get elements

const email = document.getElementById("email");
const password = document.getElementById("password-field");
const loginButton = document.getElementById("login");
const loginIcon = document.querySelector(".bi-person-fill");
const logoutIcon = document.querySelector(".fa-right-from-bracket");
// Add event listeners
loginButton.addEventListener("click", loginUser);


// Login user function
function loginUser(event) {
  event.preventDefault();
  const Email = email.value.trim();
  const pwd = password.value.trim();

  if (Email && pwd) {
    const userInfoJson = localStorage.getItem("userInfo");

    if (userInfoJson) {
      const userInfo = JSON.parse(userInfoJson);

      if (Email === userInfo.email && pwd === userInfo.password) {
        
        alert("Login successful");
        loginIcon.classList.add("iconHide");
        logoutIcon.classList.remove("iconHide");

        location.href = "index.html";
      }else{
        loginIcon.classList.remove("iconHide");
        logoutIcon.classList.add("iconHide");

      }
    } else {
      alert("No user found. Please register first.");
    }
  } else {
    alert("Please enter email and password.");
  }
}