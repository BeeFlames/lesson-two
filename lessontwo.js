
// function

// #1
function firstFunction() {
  let x = 32;
  let y = 32;
  let z = x + y;
  console.log(z)
}

// creating function (no 1 )
firstFunction();

// no 2
let secondFunc = function(){
  let x = 32;
  let y = 32;
  let z = x + y;
  console.log(z)
}
secondFunc();

// no 3
let thirdFunc = function(para1, para2){ //at the point of supply = parameters
  return para1 + para2;
}
console.log ( thirdFunc(34,45) ); //at the point of definition/usage = arguments

// no 4 (arrow function)
//4.1
let fourthFunc = ()=>{ console.log("Hello World") }

let fifthFunc = (x) => x; // function with implicit return statement (no need to type out 'return')

//IIFE = Immediately Invoked Function Expression

let myArr = [34,56,67,23,78];
let myNewArr = myArr.map( (a)=> a*2 );
console.log ( myNewArr);

//callback function

function display(x){
  console.log(x);
}

function testCallBack(func){
  let result = 40 * 4;
  func(result);
}

//using the function

testCallBack(display);

//THE WINDOW OBJECT
//window .on = event listener (event=any action that can happen on the browser triggered by the user.)

console.log(window);
console.log(this);

if(window.ononline){
  console.log('online '+window.ononline);
  console.log('offline '+window.onoffline);
}

// document object

console.log(window.document);
console.log(document);

//Many inbuilt JS Methods for reading or targetting elements on the DOM
/*
1. document.getElementById()
2. document.quaerySelector()
3. document.querySelectorAll()  returns a node list
4. document.getElementsByTagName() returns an HTML selection
5. document.getElementByClassName()
*/

let div = document.getElementsByTagName("div");
let div2 = document.querySelectorAll("div");
console.log(div);
console.log(div2);

const dob = document.querySelector(".dob");
const dob_btn = document.querySelector(".dob_btn");
const disp = document.querySelector(".display");

function calculateAge(dt){
  if(dt){
    let now = new Date();
    let dob = new Date(dt);
    let diff = now.getTime() - dob.getTime(); // date diff in milliseconds
        diff = diff/1000;
        diff = Math.floor(diff/3600/24/365);
    disp.innerHTML = `You are now ${diff} year old.`;
    console.log(diff);
    console.log(now.getFullYear() , dob.getFullYear());
    console.log(now.getFullYear() - dob.getFullYear()); 
   }else{
    disp.innerHTML = "Date of Birth Field is required";
   }
}

dob_btn.addEventListener("click",function () {
  console.log(dob.value);
  calculateAge(dob.value);
});

// dob.addEventListener("change", function (e) {
//   console.log(e.target.value);
//   calculateAge(e.target.value);
// });

// WORKING WITH FORMS (select a form thru getElementsByTagName, Id, Index No)

let form = document.forms;
console.log(form);
console.log(form[0]);           // selecting a form through index no. the first form on the page
console.log(form.signup_form);  // selecting a form by its name
console.log(form.length);       // finding out the number of forms on a page or in a doc.

form.signup_form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default behaviours of forms like 'get-displays input in the search bar'
  // location.href = e.target.action;  //redirecting the signup page to the specified fallback action url
  let username = document.getElementById('username').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let uType = document.getElementById('userType').value.trim(); //for the drop

  console.log(username, email, password, uType);
});

// Attaching an event listener to the username field (selecting element of the form at 0 index)
// form.signup_form.element[0].addEventListener("keyup", function(e) {
//   console.log(e.target.value);
// });

form.signup_form.elements[0].addEventListener("mouseenter", function(e){
  console.log(e);
});
form.signup_form.elements[0].addEventListener("mouseleave", function(e){
  console.log(e);
});
form.signup_form.elements[0].addEventListener("focus", function(e){
  console.log("you have gained focus");
});

// Attaching event to the password input
form.signup_form.elements[2].onkeyup = function(e){
  if(e.target.value.trim().length >=6){
    console.log(e.target.value);
    e.target.style.border = '4px solid green';
  }else{
    e.target.style.border = '4px solid red';
    console.log("password must be atleast 6 charecter");
  }
  }

  // INPUT VALIDATION (validating a user inout information)
  const result = document.querySelector('p.result');
  const inp = form.signup_form.elements[4];
  inp.oninput = function(evt){
    if(inp.checkValidity()){
      result.style.backgroundColor = "palegreen";
      result.innerHTML = "Input OK";
    }else{
      result.style.backgroundColor = "#FF0";
      result.innerHTML = inp.validationMessage;
    }
  }

// Conditionals

/*
1.  if = statement
2.  if - else statement
3.  if - else - if statement
4.  switch statement
*/

// if statement
let testNum = 90;

if (testNum > 10){
  console.error("valid", testNum);
}else{
  console.log("Wrong Input");
}

// if-else-if
if (testNum > 10 ){
  console.info("Valid", testNum);
}else if(testNum >=11 && testNum<=20){
  console.log("11 - 20 Range");
}else if(testNum == 40){
  console.log("STILL WITHIN RANGE");
}else{
  console.error("Out of Range");
}

//switch (specific, finite)
let banky = "ZENITH";

switch(banky){
  case "ZENITH":
    console.log("Hello! Welcome to ZENITH Bank");
  break;

  case "FIRST":
    console.log("Hello! Welcome to FIRST Bank");
  break;

  case "FIDELITY":
    console.log("Hello! Welcome to FIDELITY Bank");
  break;

  default:
  console.log("sorry, your bank is not listed");
  break;
}
