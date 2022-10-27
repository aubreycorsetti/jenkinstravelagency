/* eslint-disable no-unused-vars */
// QUESTIONS
addlocal();
function addlocal(){
  const userInput = document.getElementById('userInput').value;
  localStorage.setItem('name', userInput);
}
