function clearErrors(){

  //go through all form elements
  var elements = document.forms["contactForm"].elements;
  for(var i = 0; i < elements.length; i++){

    //reset errors in parent:
    var input = elements[i];
    var parentClassName = input.parentElement.className;
    if(parentClassName.indexOf("has-") != -1){  //error in parent class
      parentClassName = "form-group"; //clear errors
    }
  }
}

function validateInput(){
  clearErrors();
  var form = document.forms["contactForm"];
  var name = form["name"].value;
  var email = form["email"].value;
  var phone = form["phone"].value;

  if(name == ""){
    alert("Please fill in your name.");
    form["name"].parentElement.className = "form-group has-error";
    form["name"].focus();
    return false;
  }

  if(email == ""){
    alert("Please enter your email.");
    form["email"].parentElement.className = "form-group has-error";
    form["email"].focus();
    return false;
  }

  if(phone == "" || isNaN(phone)){
    alert("Please enter your phone number.");
    form["phone"].parentElement.className = "form-group has-error";
    form["phone"].focus();
    return false;
  }

  document.forms["contactForm"]["name"].focus();  //cursor jumps to start input field
  // We are returning false so that the form doesn't submit & we can see the results
  // If you change this to true, the form submits to it's action attribute.

  alert("Thank you for entering your information. We received your name, email, and phone number and will get back to you shortly");
  
   return false;
}