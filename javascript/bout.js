function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  answer.style.display = answer.style.display === "none" || answer.style.display === "" ? "block" : "none";
}