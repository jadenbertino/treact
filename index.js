function openMenu() {
  let nav = document.getElementsByClassName('nav__links')[0];
  nav.classList.add("menuActive");
}

function closeMenu () {
  let nav = document.getElementsByClassName('nav__links')[0];
  nav.classList.remove("menuActive");
}

function setActive(question_num) {
  let question = document.getElementById(question_num);

  if (question.classList.contains('active')) {
    // if question is active, then set as inactive
    question.classList.remove('active');
  }

  else {
    // if question is inactive, then set as active
    question.classList.add('active');

    // also set all other questions as inactive
    let questions = document.getElementsByClassName('question')
    for (let i = 0; i < questions.length; i++) {
      let q = questions[i];
      if (q.classList.contains('active') && q.id != question_num) {
        q.classList.remove('active');
      }
    }
  }
}

function countdown(n){
  if (n <= 0) {
    return []
  } else {
    return countdown(n-1) += [n];
  }
}

let x = [];
x.shift()
console.log()  
  // else {
  //   // if question is not currently focused, then
  //   // 1) unfocus all other questions
  //   let questions = ["q1", "q2", "q3", "q4", "q5", "q6"];
  //   let index = questions.indexOf(question);
  //   if (index > -1) {
  //     questions.splice(index, 1);
  //   }
  //   document.body.classList.remove(questions);

  //   // 2) focus current question 
  //   answer__toggle += question;
  // }

  //   */
  // }
// 
// }

