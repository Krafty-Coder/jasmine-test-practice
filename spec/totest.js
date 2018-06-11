console.log("My js works");
class Calculate {

  add(a,b) {
    return eval(a + b);

  };
  subtract(a,b) {
    return a - b;

  };
  divide(a,b) {
    return a / b;

  };
  multiply(a,b) {
    return a * b;

  };

};

var calculate = new Calculate();

a = document.getElementById("valueone").value
sym = document.getElementById("sym").value
b = document.getElementById("valuetwo").value

function calc() {
  if (sym == "+") {
    document.getElementById("demo").innerHTML = calculate.add(a,b);
  } else if (sym == "-") {
    document.getElementById("demo").innerHTML = calculate.subtract(a,b);
  } else if (sym == "*") {
    document.getElementById("demo").innerHTML = calculate.multiply(a,b);
  } else if (sym == "/") {
    document.getElementById("demo").innerHTML = calculate.divide(a,b);
  } else {
    alert("Please input a valid operator and try again");
  }
};



