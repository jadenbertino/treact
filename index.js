function openMenu() {
  document.body.classList += " menu--open"
  /* 
  - goes to the object "document -> body -> list of it's classes" then appends the given class
  - You need the space so that it is separated from any existing classes
  when it gets appended 
  */ 
}

function closeMenu() {
  document.body.classList.remove('menu--open')
  /* 
  - goes to the object "document -> body -> list of it's classes" then removes the given class
  */
}

// ——————

function setActive(question) {
  let questions = ["q1__active", "q2__active", "q3__active", "q4__active", "q5__active", "q6__active"];
  let index = questions.indexOf(question);
  if (index > -1) {
    questions.splice(index, 1);
  }
  document.body.classList.remove(questions); // unfocus any other questions
  document.body.classList += ` ${question}` // focus question clicked
}