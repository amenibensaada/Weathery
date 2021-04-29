document.querySelector(".button").onclick = function () {
  var password = document.querySelector(".password").value;

  if (password == "") {
    alert("Field can not be empty ");
  } else if (password !== "") {
    window.location.href = "../pages/choose.html";
  }
};
