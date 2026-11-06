  let bustInput = document.getElementById("bust");
  let waistInput = document.getElementById("waist");
  let hipInput = document.getElementById("hip");
  let shoulderInput = document.getElementById("shoulder");
  let calculate = document.getElementById("calculateButton");
  let clear = document.getElementById("clearButton");
  let measureSelect = document.getElementById('measure');


let result;

 let heightInput = document.getElementById("height");
 let weightInput = document.getElementById("weight");
 let calculateButton = document.getElementById("calculate");
 let clearButton = document.getElementById("clear"); 
 let BMI; 

 calculate.addEventListener("click", function(e){
  e.preventDefault();
    calculateBodyShape();
  });

  clear.addEventListener("click", function(){
    bustInput.value = "";
    waistInput.value = "";
    hipInput.value = "";
    shoulderInput.value = "";
  });



 calculateButton.addEventListener("click", function(e){ 
  e.preventDefault();
  calculateBMI(); }); 

 clearButton.addEventListener("click", function(){ heightInput.value = ""; weightInput.value = ""; });



 function calculateBMI() {
  var height = parseFloat(heightInput.value); 
 var weight = parseFloat(weightInput.value); 
 if (isNaN(height) || isNaN(weight)) 
  { 
    alert("Please enter valid numbers for height and weight"); 
    return; 
  } 

  BMI = weight / (height ** 2); 
  if (BMI < 18.5) { 
    alert("Your BMI falls within the underweight range"); 
} 
else if (BMI > 18.5 && BMI < 24.9) {
 alert("Your BMI falls within the normal or healthy weight range");
  }
  else if (BMI > 25 && BMI < 29.9) { 
  alert("Your BMI falls within the overweight range");
   }

   else { alert("Your BMI falls within the obese range"); } 
 } 




// Body Measurement
function calculateBodyShape() {
  const measureUnit = measureSelect.value;
  const bust = parseFloat(document.getElementById("bust").value);
  const waist = parseFloat(document.getElementById("waist").value);
  const hip = parseFloat(document.getElementById("highHip").value);
  const shoulder = parseFloat(document.getElementById("shoulder").value);

  if (isNaN(bust) || isNaN(waist) || isNaN(hip) || isNaN(shoulder)) {
    alert("Please enter valid numbers for all measurements");
    return;
  }

  let bustInches, waistInches, hipInches, shoulderInches;
  if (measureUnit === 'cm') {
    bustInches = bust / 2.54;
    waistInches = waist / 2.54;
    hipInches = hip / 2.54;
    shoulderInches = shoulder / 2.54;
  } else {
    bustInches = bust;
    waistInches = waist;
    hipInches = hip;
    shoulderInches = shoulder;
  }

  const whr = waistInches / hipInches;
  const wbr = waistInches / bustInches;

  let bodyShape;
  if (bustInches > hipInches && bustInches > waistInches) {
    bodyShape = "Triangle";
  } else if (Math.abs(bustInches - waistInches) < 0.05 * bustInches && Math.abs(bustInches - hipInches) < 0.05 * bustInches && waistInches > 0.75 * bustInches) {
    bodyShape = "Rectangle";
  } else if (whr < 0.7 && wbr < 0.7 && bustInches < hipInches) {
    bodyShape = "Hourglass";
  } else if (whr < 0.7 && wbr < 0.7) {
    bodyShape = "Pear";
  } else if (whr > 0.85 && wbr > 0.85) {
    bodyShape = "Apple";
  } else if (bustInches > waistInches && hipInches < waistInches) {
    bodyShape = "Inverted Triangle";
  } else {
    bodyShape = "Unknown";
  }

  alert(`You have a ${bodyShape} shape`);
}