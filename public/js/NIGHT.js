function setDefaultDate() {
    var today = new Date(); // Obtient la date actuelle
    today.setDate(today.getDate() - 1); // Soustrait un jour
    
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Janvier est 0 !
    var yyyy = today.getFullYear();
    
    var yesterday = yyyy + '-' + mm + '-' + dd; // Formatte la date à la veille
    document.getElementById('BirthDate').value = yesterday; // Définit la valeur
}

function calculerAgeEtNuitsEcoulées() {
    // Récupérer la date de naissance depuis l'élément HTML
    var inputDateNaissance = document.getElementById("BirthDate").value;
    
    // Sortie anticipée si aucune date n'est fournie
    if (!inputDateNaissance) {
        return;
    }

    // Convertir la chaîne de caractères de la date de naissance en objet Date
    var parts = inputDateNaissance.split('-');
    var birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
    var currentDate = new Date();

    // Calcul de l'âge
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    
    // Vérifier si l'anniversaire n'est pas encore passé dans l'année en cours
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Calcul du pourcentage de vie restante en fonction du sexe
    var gender = document.getElementById("gender").value;
    var maxLifeExpectancy = (gender === "male") ? 79.1 : 85.1;
    var lifePercentage = ((maxLifeExpectancy - age) / maxLifeExpectancy) * 100;
    
    // Assurer que le pourcentage est dans la plage valide (0 ≤ lifePercentage ≤ 100)
    lifePercentage = Math.max(0, Math.min(lifePercentage, 100));



    //progression de l'espérance de vie !!!!
    var progressBar = document.querySelector("#esperanceHP .progress-bar");
    progressBar.style.width = lifePercentage + "%";
    progressBar.innerText = lifePercentage.toFixed(0) + " %  " + age + " / " + maxLifeExpectancy.toFixed(0) + " hp";

    //âge actuel et le nombre de nuits écoulées
    document.getElementById("current-age").innerText = "Lvl " + age;
    var oneDay = 24 * 60 * 60 * 1000; // heures * minutes * secondes * millisecondes
    var nightsLived = Math.floor((currentDate - birthDate) / oneDay);
    document.getElementById("nights-lived").innerText = nightsLived;



    // Mettre à jour les données du profil dans ElementById
    document.getElementById("BirthDateIs").innerText = "Energy 0 / " + age;

}













function askBirthDate() {
    var birthDateString = prompt("Please enter your birth date (e.g., 01/01/2000):");
    console.log("Your birth date is: " + birthDateString);
    
    // Convertir la chaîne de caractères de la date en objet Date
    var birthDate = new Date(birthDateString);
    if (isNaN(birthDate.getTime())) {
        console.log("Invalid date. Please enter the date in the format MM/DD/YYYY.");
        return;
    }
    
    var currentDate = new Date();
    
    // Vérifie si l'anniversaire est aujourd'hui
    var isBirthday = currentDate.getDate() === birthDate.getDate() && 
                     currentDate.getMonth() === birthDate.getMonth();
    
    // Calculer la différence en millisecondes
    var diff = currentDate - birthDate;
    
    // Convertir la différence en nuits
    var nights = diff / (24 * 60 * 60 * 1000);
    console.log("You have lived for approximately " + Math.floor(nights) + " nights.");
    
    var manaMaxElement = document.getElementById('ManaMax');
    var nightsPassed = Math.floor(nights); // valeur représentant les nuits passées
    manaMaxElement.innerHTML = nightsPassed; // pour le progress-bar actuel
    
    // Calculer l'âge en années
    var ageYears = diff / (365.25 * 24 * 60 * 60 * 1000);
    manaMaxElement.style.width = years + "%"; // Modification de la largeur en pourcentage selon la valeur de `night`
    
    var level = Math.round(ageYears);

    console.log("Your level based on your age is: " + level);
    
    // Calcul pour obtenir le nombre exact d'années, de mois, et de jours
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();
    
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    console.log(`Exact age: ${years} years, ${months} months, and ${days} days.`);
    
    // Message pour l'anniversaire
    if (isBirthday) {
        console.log("Happy Birthday! 🎉");
    } else {
        // Calculer le prochain anniversaire
        var nextBirthday = new Date(birthDate.getFullYear() + years + 1, birthDate.getMonth(), birthDate.getDate());
        var daysUntilBirthday = (nextBirthday - currentDate) / (24 * 60 * 60 * 1000);
        console.log("Days until next birthday: " + Math.round(daysUntilBirthday));
    }
    // Messages personnalisés selon l'âge
    if (level < 18) {
        console.log("You are young and full of potential!");
    } else if (level >= 18 && level < 60) {
        console.log("Enjoy the prime years of your life!");
    } else {
        console.log("Embrace the wisdom that comes with age!");
    }
}























// Function to calculate Metabolic Basal Rate (MBR) and provide energy and calorie advice.
function calculateMB() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = 28;
    var gender = document.getElementById("gender").value;
    var mb;

    // Validate inputs
    if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please fill in all fields with positive numbers.");
        return;
    }

    // Calculate MBR based on gender
    if (gender === "male") { // Male
        mb = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") { // Female
        mb = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        alert("Please select a valid gender.");
        return;
    }

    // Log and display results
    console.log(`Calculated Data for User =Gender: ${gender}, Weight: ${weight} kg, Height: ${height} cm, Age: ${age} years.`);
    document.getElementById('calorieCount').innerText = calories.toFixed(2);

}



















// Invocation des fonctions

document.addEventListener('DOMContentLoaded', function() {
    setDefaultDate();
    calculerAgeEtNuitsEcoulées();
});
