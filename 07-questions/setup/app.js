//using selectors inside the element

const questions = document.querySelectorAll(".question");

// const questionBtns = document.querySelectorAll(".question-btn");

// console.log(questions);

// console.log(questionBtns);

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      //   console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
// traversing the dom
