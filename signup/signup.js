document.querySelector(".button").onclick = function () {
  var password = document.querySelector(".password").value;
  var confirmpassword = document.querySelector(".confirmpassword").value;

  if (password == "") {
    alert("Field can not be empty ");
  } else if (password !== confirmpassword) {
    alert("Password didn't match try again");
  } else if (password !== "") {
    window.location.href = "../pages/choose.html";
  }
};
