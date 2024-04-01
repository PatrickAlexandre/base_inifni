 class Quest {
  constructor(name, description, reward) {
    this.name = name;
    this.description = description;
    this.reward = reward;
    this.isCompleted = false;
  }

  complete() {
    this.isCompleted = true;
    console.log(`${this.name} a été complétée. Récompense : ${this.reward}`);
  }
}

// Exemple d'utilisation
const quest1 = new Quest("Trouver l'épée perdue", "Récupérer l'épée perdue dans la forêt noire", "100 pièces d'or");
console.log(quest1.description);
quest1.complete();
