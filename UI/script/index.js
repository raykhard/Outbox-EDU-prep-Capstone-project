function Validate(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(username);
    if (username === "") {
      window.alert("Please enter your name.");
      username.focus();
      return false;
    } else if (email === "") {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    } else if (password === "") {
      window.alert("Please enter your password");
      password.focus();
      return false;
    } else {
      window.alert("You have succesfully logged in :-) ");
      window.location.href = "/UI/Templates/accountpage.html";
    }
  }