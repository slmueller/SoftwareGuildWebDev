function clearErrors(){

  //go through all form elements
  var elements = document.forms["numberFun"].elements;
  for(var i = 0; i < elements.length; i++){

    //reset errors in parent:
    var input = elements[i];
    var parentClassName = input.parentElement.className;
    if(parentClassName.indexOf("has-") != -1){  //error in parent class
      parentClassName = "form-group"; //clear errors
    }
  }
}

function resetForm(){
  clearErrors();
  document.forms["numberFun"]["num1"].value = "";
  document.forms["numberFun"]["num2"].value = "";
  document.getElementById("results").style.display = "none";  //hide results table
  document.getElementById("submitButton").innerText = "Submit"; //reset button text
  document.forms["numberFun"]["num1"].focus();  //cursor jumps to num1 input field
}

function validateItems(){
  clearErrors();
  var form = document.forms["numberFun"];
  var num1 = form["num1"].value;
  var num2 = form["num2"].value;

  if(num1 == "" || isNaN(num1)){
    alert("Num1 must be filled in with a number.");
    form["num1"].parentElement.className = "form-group has-error";
    form["num1"].focus();
    return false;
  }

  if(num2 == "" || isNaN(num2)){
    alert("Num2 must be filled in with a number.");
    form["num2"].parentElement.className = "form-group has-error";
    form["num2"].focus();
    return false;
  }

  document.getElementById("submitButton").innerText = "Recalculate"; //set button from "Submit" to "Recalculate"

  //calculate & display results:
  document.getElementById("results").style.display = "block";
  document.getElementById("addResult").innerText = Number(num1) + Number(num2);
  document.getElementById("subtractResult").innerText = num1 - num2;
  document.getElementById("multiplyResult").innerText = num1 * num2;
  document.getElementById("divideResult").innerText = num1 / num2;

  // We are returning false so that the form doesn't submit & we can see the results
  // We are returning false at the end so that we can see the table of results.
  // If you change this to true, the form submits to it's action attribute.
  //Since we are only focusing on form validation in this example,  we are returning false and keeping our output on this page.
  //Typically, form data gets submitted to some other page on a server, which then does things with the form data and may return a response.
   return false;
}
