document.addEventListener("DOMContentLoaded", function() {
  // Example user data - replace these with actual user input or data
  let gender = 'male'; // Assume male; could be dynamic based on user input
  let age = 1; // User's age; should be dynamic based on user input
  let weight = document.getElementById('weight').value; // User's weight in kg
  let height = document.getElementById('height').value; // User's height in cm
  let lifeExpectancy = { male: 79.3, female: 85.3 }; // Average life expectancy in France by gender
  setDefaultDate();

  function setDefaultDate() {
      var today = new Date(); // Obtient la date actuelle
      today.setDate(today.getDate());
      
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); // Janvier est 0 !
      var yyyy = today.getFullYear();
      
      var yesterday = yyyy + '-' + mm + '-' + dd; // Formatte la date à la veille
      document.getElementById('BirthDate').value = yesterday; // Définit la valeur
  }

  // Calculate BMR using function incorporating the Harris-Benedict formula
  function calculateBMR(weight, height, age, gender) {
    if (gender === "male") {
      return 66.5 + (13.75 * weight) + (5 * height) - (6.775 * age);
    } else if (gender === "female") {
      return 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
      throw new Error("Invalid gender. Please enter 'male' or 'female'.");
    }
  }

  // Calculate BMR using the Mifflin-St Jeor Equation
//  function calculateBMR(weight, height, age, gender) {
//    if (gender === 'male') {
//      return (10 * weight) + (6.25 * height) - (5 * age) + 5;
//    } else {
//      return (10 * weight) + (6.25 * height) - (5 * age) - 161;
//    }
//  }
  
  // Calculate life expectancy percentage
  function calculateLifeExpectancyPercent(age, gender) {
    let expectancy = lifeExpectancy[gender];
    let lived = (age / expectancy) * 100;
    return lived.toFixed(2); // Returns a string with 2 digits after the decimal point
  }

  // Update BMR progress bar
  function updateBMRProgress() {
    let bmr = calculateBMR(weight, height, age, gender);
    // Assuming you have a progress bar for BMR and its max value set to an estimated daily requirement
    document.getElementById('energy-bar').style.width = `${(bmr / 2500) * 100}%`;
    document.getElementById('energy-bar').innerText = `Energy  ${bmr.toFixed(0)} kCal`;
  }

  //BUG  Update life expectancy progress bar
  function updateLifeExpectancyProgress() {
    let lifePercent = calculateLifeExpectancyPercent(age, gender);
    //document.getElementById('BirthDate').style.width = `${lifePercent}%`;
    //document.getElementById('BirthDate').innerText = `${lifePercent}% of life expectancy`;
  }

  // Initial update on load
  updateBMRProgress();
  updateLifeExpectancyProgress();

  // Add event listeners to recalculate when input changes
  document.getElementById('weight').addEventListener('change', function() {
    weight = this.value;
    updateBMRProgress();
  });

  document.getElementById('height').addEventListener('change', function() {
    height = this.value;
    updateBMRProgress();
  });

});
