document.addEventListener("DOMContentLoaded", function () {
  const continueBtn = document.getElementById("continueBtn");
  const resetBtn = document.getElementById("resetBtn");
  const form = document.getElementById("donationform");


  continueBtn.addEventListener("click", function (e) {
   e.preventDefault();

   const requiredFields = form.querySelectorAll(
      'input[type="text"], input[type="number"], input[type="email"], input[type="tel"], input[type="address"], select'
   );

   let emptyFound = false;

   requiredFields.forEach(field => {
      if (field.value === "") {
        emptyFound = true;
        field.style.border = "2px solid red";
      } else {
        field.style.border = "";
      }
    });

    if (emptyFound) {
      alert("fill up the form plz.");
    } else {
      alert("yeahhhhhh.");
      form.submit();
    }
  });

 
resetBtn.addEventListener("click", function () {
   form.reset();

   const inputs = form.querySelectorAll(
      'input[type="text"], input[type="number"], input[type="email"], input[type="tel"], input[type="address"], select'
   );

   inputs.forEach(input => {
      input.style.border = ""; 
   });
  });
});
