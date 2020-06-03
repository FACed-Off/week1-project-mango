function validateForm() {
    //Runs on clicking contact form submit button
    nameValidation();
    // companyValidation();
    // emailValidation();
}

function nameValidation() {
    //Validates the name input
    let nameValue, validationText, lettersOnly;

    //Gets value of the input field with id="name"
    validationText = "";
    nameValue = document.getElementById("name").value;
    lettersOnly = /\d/

    if (lettersOnly.test(nameValue)) {
        validationText = "Name input must not contain non alphabet characters"
        return false;
        //Do not submit information
    }

    //Adds the validation text to the DOM by editing the errorText paragraph
    document.getElementById("errorText").innerHTML = validationText;
}

// function companyValidation() {
//     //Validates the name input
//     let companyValue, validationText;

//     //Gets value of the input field with id="companyName"
//     companyValue = document.getElementById("companyName").value;

//     if (/*company conditional fails*/) {
//         //Show error message
//         //Do not submit information
//     }

//     document.getElementById("errorText").innerHTML = validationText;
// }

// function emailValidation() {
//     //Validates the name input
//     let emailValue, validationText;

//     //Gets value of the input field with id="email"
//     emailValue = document.getElementById("email").value;

//     if (/*email conditional fails*/) {
//         //Show error message
//         //Do not submit information
//     }

//     document.getElementById("errorText").innerHTML = validationText;
// }