// ——————

function setActive(question_num) {
  let question = document.getElementById(question_num);

  if (question.classList.contains('active')) {
    // if question is active, then set as inactive
    question.classList.remove('active');
  }

  else {
    // if question is inactive, then set as active
    question.classList.add('active');
/*
    // also set all other questions as inactive
    let all__questions = document.getElementsByClassName('question')
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].classList.contains('active')) {
        questions[i].classList.remove('active')
      }
    }

    
  else {
    // if question is not currently focused, then
    // 1) unfocus all other questions
    let questions = ["q1", "q2", "q3", "q4", "q5", "q6"];
    let index = questions.indexOf(question);
    if (index > -1) {
      questions.splice(index, 1);
    }
    document.body.classList.remove(questions);

    // 2) focus current question 
    answer__toggle += question;
  }

    */
  }

}

