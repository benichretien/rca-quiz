// stock the correct answers for the questions
let correctanswers = ["C", "B", "A", "B", "A"];
//METTRE un evenlist on the form
let formu = document.querySelector(".quiz-form");

formu.addEventListener("submit", (e) => {
  e.preventDefault();
  let scores = 0;
  let userAnswers = [
    formu.q1.value,
    formu.q2.value,
    formu.q3.value,
    formu.q4.value,
    formu.q5.value,
  ];
  const result = document.querySelector(".result");
  //on parcoure le userAnswers
  userAnswers.forEach((answer, index) => {
    //
    if (answer === correctanswers[index]) {
      scores = scores + 20;
    }
  });
  scrollTo(0, 0);
  result.classList.remove("d-none");
  // set timer
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === scores) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
