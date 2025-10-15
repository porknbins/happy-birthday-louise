document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("revealBtn").style.display = "none";
});

document.getElementById("readBtn").addEventListener("click", () => {
  const text = document.getElementById("letter").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});
