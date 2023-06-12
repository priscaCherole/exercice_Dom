function updateOutput() {
    // Récupérer la valeur du champ de texte d'entrée
    var inputField = document.getElementById("inputField");
    var inputValue = inputField.value;

    // Mettre à jour le champ de texte de sortie
    var outputField = document.getElementById("outputField");
    outputField.value = inputValue;

    }