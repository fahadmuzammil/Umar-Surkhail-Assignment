function myFunction() {
    var x = document.getElementById("mySubmit").value;
    document.getElementById("demo").innerHTML = x;

        // check if number is greater than 0
        if (x > 0) {
           document.writeln("The number is positive");
        }

        // check if number is 0
        else if (x == 0) {
            document.writeln("The number is zero");
        }

        // if number is less than 0
        else {
            document.writeln("The number is negative");
     }
  }