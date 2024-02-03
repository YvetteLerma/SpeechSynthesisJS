const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
     voices = this.getVoices();
     voicesDropdown.innerHTML = voices
        .map(voices => `<option value="${voices.name}">${voices.name} (${voices.lang})</option>`)
        .join('');
};

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle() {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);