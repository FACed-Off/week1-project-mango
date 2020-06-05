
function nameValidation() {
  /*Validates name input to ensure no invalid characters are submitted, notifying
  user of invalid character type and indicating success of validation with
  an appropriate boolean */

  //Initialises variables
  let nameValue, validationText, lettersOnly;

  //Sets validation text
  validationText = "Submission successful";
  //Gets value of the input field with id="name"
  nameValue = document.getElementById("name").value;
  //Sets our comparison criteria to be equal if any digits are present
  lettersOnly = /\d/;

  if (lettersOnly.test(nameValue)) {
    /*If name input field contains any digits
    Adds validation text to the DOM by setting the errorText p element */
    validationText = "Name input must not contain non alphabet characters";
    document.getElementById("errorText").innerHTML = validationText;
    // Returns false, indicating name validation has failed
    return false;
  } else {
    /*if name input contains no digits, return true, indicating successful
    name validation */
    return true;
  }
}
