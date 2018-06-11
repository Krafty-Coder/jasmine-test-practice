var users = [];
console.log("class user workS");
var userInfo = {};
function User() {
  this.username = function() {
    this.username = "admin";
  };

  User.allow_login = function() {
    return "successfully logged in";
  };

  this.all = function() {
    this.isLogged = false;
  };

  this.createUser = function(name, password, passwordConfirmation) {
    this.name = name;
    this.password = password = password;
    this.passwordConfirmation = passwordConfirmation;
    if (password !== passwordConfirmation) {
      return "Please Confirm your password input";
    } else if(this.name.length < 3) {
      return "Put a lengthy name, your name";
    } else {
      userInfo = [this.name, [this.name, this.password]];
      users.push(userInfo);
      return "Logged in successfully";
    }
  };
};

var newUser = new User();
var newUser2 = new User();
var userList = new User();
newUser.createUser("Krafty", "KraftyC", "KraftyC");
newUser2.createUser("admin", "adminC", "adminC");

if (newUser.password !== newUser.passwordConfirmation) {
  console.log("Please Confirm your password input");
} else if(newUser.name.length < 3) {
  console.log("Put a lengthy name, your name");
} else {
  console.log("Logged in successfully");
}








