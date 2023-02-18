var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;
var result5Score = 0;

// question number one
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

// question number two
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");
var q2a7 = document.getElementById("q2a7");
var q2a8 = document.getElementById("q2a8");
var q2a9 = document.getElementById("q2a9");
var q2a10 = document.getElementById("q2a10");
var q2a11 = document.getElementById("q2a11");
var q2a12 = document.getElementById("q2a12");
var q2a13 = document.getElementById("q2a13");
var q2a14 = document.getElementById("q2a14");
var q2a15 = document.getElementById("q2a15");
var q2a16 = document.getElementById("q2a16");

// question number three
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// question number four
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

// question number five
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

// associate click of button to result

// question one
q1a1.addEventListener("click", result2);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result2);
q1a4.addEventListener("click", result2);
q1a5.addEventListener("click", result2);

// question two
q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result1);
q2a3.addEventListener("click", result1);
q2a4.addEventListener("click", result1);
q2a5.addEventListener("click", result1);
q2a6.addEventListener("click", result1);
q2a7.addEventListener("click", result1);
q2a8.addEventListener("click", result1);
q2a9.addEventListener("click", result1);
q2a10.addEventListener("click", result1);
q2a11.addEventListener("click", result1);
q2a12.addEventListener("click", result1);
q2a13.addEventListener("click", result1);
q2a14.addEventListener("click", result1);
q2a15.addEventListener("click", result1);
q2a16.addEventListener("click", result1);

// question three
q3a1.addEventListener("click", result3);
q3a2.addEventListener("click", result5);

// question four
q4a1.addEventListener("click", result3);
q4a2.addEventListener("click", result3);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result3);
q4a5.addEventListener("click", result3);

// question five
q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);

// all result functions defined
function result1() {
  result1Score++, questionCount++;
  if (questionCount = 5) {
    updateResult();
  }
}
function result2() {
  result2Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result5() {
  result5Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (result1Score >= 2) {
    result.innerHTML = "Phun Namuh is a professional who speaks your native language. Here is their LinkedIn so you can get in contact: www.linkedin.com.";
  } 
  else if (result2Score >= 2) {
    result.innerHTML = "Tu Muche is a professional in the field you want to break into. Here is their LinkedIn so you can get in contact : www.linkedin.com.";
  } 
  else if (result3Score >= 3) {
    result.innerHTML = "Ima Stressed is a professional near your age. Here is their LinkedIn so you can get in contact: www.linkedin.com.";
  } 
  else if (result4Score >= 1) {
    result.innerHTML = "Winna Err is a professional around your age that speaks your native language and works in the field you want ot break into. Here is their LinkedIn so you can get in contact: www.linkedin.com.";
  }
  else {
    result.innerHTML = "Go to this link www.uscis.gov/working-in-the-united-states to help you get a work visa.";
  }
}