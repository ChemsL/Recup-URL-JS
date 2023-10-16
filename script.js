const p1Input = document.getElementById("p1");
const p2Input = document.getElementById("p2");
const p3Input = document.getElementById("p3")

const resultat = document.getElementById("resultat")

const urlll = new URLSearchParams(window.location.search);
const p1Value = urlll.get("p1");
const p2Value = urlll.get("p2");
const p3value = urlll.get("p3")

resultat.textContent = `nom : ${p1Value} | metier : ${p2Value} | ekip : ${p3value}`;