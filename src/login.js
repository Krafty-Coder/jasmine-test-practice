// login.js
// please dont .reverse me
// ----------------------------------------------------------------------------------------------

console.log("my javascript link works well");


// function validate(){

//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   if ( username == "Krafty" && password == "safetykrafty"){
//     alert ("Login successfully");
//     window.location = "success.html"; // Redirecting
//   } else {
//     alert("You have left "+attempt+" attempt(s)");
//     // Disabling fields after 3 attempts.
//     if( attempt == 0) {
//       document.getElementById("username").disabled = true;
//       document.getElementById("password").disabled = true;
//       document.getElementById("submit").disabled = true;
//       return false;
//     }
//   }
// };

function User() {
  console.log("User login class works fine");
  password: "Krafty"
    allow_login() {
      return "successfully logged in";
    }
}

// User.prototype.login = function() {
//   this.username = document.getElementById("username").value;
//   this.password = document.getElementById("password").value;

//   if (userInformation["username"]["username"] == this.username and userInformation["password"]["password"] == this.password) {
//     alert("successfully logged in, enjoy");
//     window.location = "success.html";
//   } else {
//     alert("Wrong username or password");
//   }
// };

// var attempts = 3;
// function login() {
//   for (var user in users) {
//     if (user["password"] == userInformation["password"] && user["username"] == userInformation["username"]) {
//       alert("successfully logged in. Enjoy");
//       window.location = "success.html";
//     } else {
//       attempts--;
//       if (attempts > 0) {
//         alert("wrong password and username, please proof check and try again " + attempts + " left");
//       } else {
//         document.getElementById("username").disabled = true;
//         document.getElementById("password").disabled = true;
//         document.getElementById("submit").disabled = true;
//         window.location = "failed.html"
//         alert("please contact support for help, you reached your maximum trial attempts");
//       }
//     }
//   };
// };


// function register () {
//   for (var user in users) {
//     if (user["password"] == password && user["confirm_password"] == password) {
//       console.log(user);
//       alert("password confirmation success");
//       window.location = "register_done.html";
//       userInformation.username = userInformation;
//       alert("password confirmation failed");
//     } else {
//       userInformation.username = userInformation;
//       alert("password confirmation failed");
//     }
//   }
// };




