# Team Mango
## Installation :robot:	
1. Select `week1-project-mango`
2. Copy the “HTTPS clone URL” link using the clipboard icon at the bottom right of the page’s side-bar, pictured below.
![](assets/git-clone.png)
3. In the terminal from the home directory, use the command git clone, then paste the link from your clipboard, or copy the command and link: `git clone https://github.com/FACed-Off/week1-project-mango.git`
4. Change directories to the new `~/week1-project-mango` directory: `cd ~/week1-project-mango/`
5. To ensure that the master branch is up-to-date, use the pull command:`git pull https://github.com/FACed-Off/week1-project-mango.git master
`
## Process
### Why
Because we had a burning desire to create a fake agency website! :boom:
### What
This is an agency website for web deveolopers
### How
We triple programmed.

## Feature 
### Successes :clown_face:	
* Hide `<h1>` but still accessible to screen readers
  * HTML: `<h1 class="hidden-offscreen">About us</h1>`
  * CSS: `.hidden-offscreen {
  position: absolute;
  clip-path: rect(1px 1px 1px 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 5px;
  width: 5px;
  overflow: hidden;
}`
  
* `object-fit-cover` useful property to maintain aspect ratio for imgs for responsiveness

* utilised regex to search for digits in the name input 
  * `lettersOnly = /\d/;`


  `if (lettersOnly.test(nameValue)) {
    validationText = "Name input must not contain non alphabet characters";
    document.getElementById("errorText").innerHTML = validationText;
    // Returns false, indicating name validation has failed
    return false;
  } else {
    /*if name input contains no digits, return true, indicating successful
    name validation */
    return true;
  }`
  
* smooth scroll when clicking on nav links rather than jumping to different sections
  * `html {
  scroll-behavior: smooth;
}`

### Issues :hankey:
 * Focussed more on accessibilty than asthetics
 * Header looked as if it was following a paralex effect
 * Time management
 


## Team
### What we do?
Web dev agency
### What can we offer you?
Incredible web development solutions!
### Who we are?
Meeran, Shivani and Terrence
### Tell us about you and let us tell you about us!
Visit our [website](https://faced-off.github.io/week1-project-mango/) to get in contact with us and to experience our world-class web design skills!

## Support
Reach out to me at one of the following places!
* shivani@isamazing.com
* terrance@isawesome.com
* meeran@isastonishing.com

Please don't actually reach us on these links. They don't exist! :stuck_out_tongue_winking_eye:	

## Licence
Copyright 2020 © MangoProductions.
