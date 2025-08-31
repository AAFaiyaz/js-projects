//using selectors inside the element

const questions = document.querySelectorAll(".question");

// const questionBtns = document.querySelectorAll(".question-btn");

// console.log(questions);

// console.log(questionBtns);

questions.forEach((question) => {
  question.addEventListener("click", () => {
    console.log(question);
    question.classList.toggle("show-text");
  });
});
// traversing the dom
