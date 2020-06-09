"use strict"

var questionAnswerBlock = document.querySelector(".question-answer__list");

let questionAnswerBlockClickHandler = (evt) => {
  if(evt.target.classList.contains("question-answer__button")) {
    evt.target.classList.toggle("question-answer__button--open");
  }
};

questionAnswerBlock.addEventListener("click", questionAnswerBlockClickHandler);


