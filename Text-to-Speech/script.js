function speakText() {
    var text = document.getElementById("text-input").value;
    var speechSynthesis = window.speechSynthesis;
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-EN"; // Définit la langue à français
    speech.pitch = 1; // Définit la hauteur de la voix
    speech.rate = 1; // Définit la vitesse de la voix
    speechSynthesis.speak(speech);
}
