function validateForm() {
  //Runs on clicking contact form submit button
  nameValidation();
  if (nameValidation()) {
    return true;
  } else {
    return false;
  }
  // companyValidation();
  // emailValidation();
}

function nameValidation() {
  //Validates the name input
  let nameValue, validationText, lettersOnly;

  //Gets value of the input field with id="name"
  validationText = "";
  nameValue = document.getElementById("name").value;
  lettersOnly = /\d/;

  if (lettersOnly.test(nameValue)) {
    validationText = "Name input must not contain non alphabet characters";
    document.getElementById("errorText").innerHTML = validationText;
    return false;
    //Do not submit information
  } else {
    return true;
  }

  //Adds the validation text to the DOM by editing the errorText paragraph
}
