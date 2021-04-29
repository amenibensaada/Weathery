const button = document.getElementById("signup_button");
var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");
var email = document.getElementById("email");
var Password = document.getElementById("Password");
function verifyPassword(event) {
  console.log("kjfehg");
  if (FirstName.value !== "") {
    if (LastName.value !== "") {
      if (email.value !== "") {
        if (Password.value !== "") {
          window.location.href = "/choose.html";
        } else {
          alert("Password vide");
        }
      } else {
        alert("Email vide");
      }
    } else {
      alert("Lastname vide");
    }
  } else {
    alert("Firstname vide");
  }
}
button.addEventListener("click", function () {
  verifyPassword();
});
