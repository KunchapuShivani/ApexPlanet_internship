/* ✅ QUIZ LOGIC */
if (document.getElementById("quizBox")) {
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style System", "Creative Style System"],
      answer: "Cascading Style Sheets"
    }
  ];

  const quizBox = document.getElementById("quizBox");
  const submitQuiz = document.getElementById("submitQuiz");
  const quizResult = document.getElementById("quizResult");

  function loadQuiz() {
    quizBox.innerHTML = "";
    quizData.forEach((q, i) => {
      let qHTML = `<div>
        <p>${i + 1}. ${q.question}</p>`;
      q.options.forEach(opt => {
        qHTML += `
          <label>
            <input type="radio" name="q${i}" value="${opt}"> ${opt}
          </label><br>`;
      });
      qHTML += `</div>`;
      quizBox.innerHTML += qHTML;
    });
  }

  submitQuiz.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });
    quizResult.textContent = `You scored ${score}/${quizData.length}`;
  });

  loadQuiz();
}

/* ✅ API FETCH (Jokes) */
if (document.getElementById("getJoke")) {
  const jokeBtn = document.getElementById("getJoke");
  const jokeText = document.getElementById("jokeText");

  jokeBtn.addEventListener("click", async () => {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      jokeText.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
      jokeText.textContent = "Oops! Could not fetch a joke.";
    }
  });
}
