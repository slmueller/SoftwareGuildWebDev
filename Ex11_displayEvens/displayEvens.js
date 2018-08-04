function clearErrors(){

  //go through all form elements
  var elements = document.forms["evens"].elements;
  for(var i = 0; i < elements.length; i++){

    //reset errors in parent:
    var input = elements[i];
    var parentClassName = input.parentElement.className;
    if(parentClassName.indexOf("has-") != -1){  //error in parent class
      parentClassName = "form-group"; //clear errors
    }
  }
}

function validateItems(){
  clearErrors();
  var form = document.forms["evens"];
  var start = form["start"].value;
  var end = form["end"].value;
  var step = form["step"].value;

  if(start == "" || isNaN(start)){
    alert("Start must be filled in with a number.");
    form["start"].parentElement.className = "form-group has-error";
    form["start"].focus();
    resetResults();
    return false;
  }

  if(end == "" || isNaN(end)){
    alert("End must be filled in with a number.");
    form["end"].parentElement.className = "form-group has-error";
    form["end"].focus();
    resetResults();
    return false;
  }

  if(step == "" || isNaN(step)){
    alert("Step must be filled in with a number.");
    form["step"].parentElement.className = "form-group has-error";
    form["step"].focus();
    resetResults();
    return false;
  }

  if(end < start){
    alert("End must be larger than or equal to Start.");
    form["end"].parentElement.className = "form-group has-error";
    form["end"].focus();
    resetResults();
    return false;
  }

  //calculate & display results:
  var results = getEvenNumbers(start, end, step);
  showResults(start, end, step, results);

  document.forms["evens"]["start"].focus();  //cursor jumps to start input field
  // We are returning false so that the form doesn't submit & we can see the results
  // We are returning false at the end so that we can see the table of results.
  // If you change this to true, the form submits to it's action attribute.
  //Since we are only focusing on form validation in this example,  we are returning false and keeping our output on this page.
  //Typically, form data gets submitted to some other page on a server, which then does things with the form data and may return a response.
   return false;
}

function getEvenNumbers(start, end, step){
  var evenNumbers = new Array();
  for (i = Number(start); i < (Number(end) + 1); i += Number(step)) {
    if(i % 2 == 0){
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}


function createResultText(start, end, step, results){
  var resultText = "No even numbers found."

  if(results !== null && results.length !== 0){
    resultText = "Here are the even numbers between " + start + " and " + end + " by " + step + "s";

    for (var i = 0; i < results.length; i++) {
      resultText = resultText + "\n " + results[i];
    }
  }

  return resultText;
}

function showResults(start, end, step, results){
  document.getElementById("results").style.display = "block";
  document.getElementById("evenNumbers").innerText = createResultText(start, end, step, results);
}

function resetResults(){
  document.getElementById("results").style.display = "none";
  document.getElementById("evenNumbers").innerText = string.Empty;
}
