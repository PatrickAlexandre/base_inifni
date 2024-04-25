const solutions = {
    overthinking: "L'écriture aide à organiser vos pensées et à réduire la surcharge cognitive.",
    anxious: "La méditation peut diminuer la production de cortisol, l'hormone du stress.",
    tired: "Une sieste réparatrice peut réguler les hormones du stress et améliorer la concentration.",
    sad: "L'exercice libère des endorphines, améliorant ainsi l'humeur.",
    stressed: "Une promenade peut réduire les niveaux d'adrénaline et de cortisol.",
    angry: "Écouter de la musique peut diminuer la fréquence cardiaque et réduire l'agitation.",
    lazy: "Réduire le temps d'écran peut diminuer la fatigue visuelle et améliorer la qualité du sommeil.",
    burntout: "La lecture réduit le stress et améliore la fonction cognitive."
};

function updateSolution() {
    var emotion = document.getElementById('emotionSelect').value;
    var solutionText = solutions[emotion] || 'Veuillez sélectionner une émotion.';
    document.getElementById('solution').innerHTML = solutionText;
}

document.getElementById('emotionSelect').onchange = updateSolution;

// Initialise avec la solution de l'émotion par défaut si nécessaire
window.onload = function() {
    updateSolution(); // Cela affichera la solution pour l'émotion actuellement sélectionnée au chargement de la page
};
