
let questions = [
  {
    id: 1,
    question: "where was the first case of COVID-19 observed?",
    answer: "Wuhan,China",
    options: [
      "New York,America",
     "Tokyo,Japan",
     "Wuhan,China",
     "Manaus,Brazil"
    ]
  },
  {
    id: 2,
    question: "What are the organs most affected by COVID-19?",
    answer: "Lungs",
    options: [
    "Lungs",
     "Hear",
     "Stomach",
     "Brain"
    ]
  },
  {
    id: 3,
    question: "What is the most common test to detect COVID-19?",
    answer: "PCR test",
    options: [
      "Blood test",
      "Thyroid test",
      "X-ray",
      "PCR test"
    ]
  },
  {
    id: 4,
    question: "Which is the most affected country due to COVID-19?",
    answer: "America",
    options: [
      "China",
      "America",
      "Brazil",
      "India"
    ]
  },
  {
    id: 5,
    question: " Which type of organism causes COVID-19 ?",
    answer: "Virus",
    options: [
      "Virus",
      "Bacteria",
      "Fungus",
      "Protozoa"
    ]
  },
  {
    id: 6,
    question: " Where does the first case of COVID-19 observed in India?",
    answer: "Kerala",
    options: [
      "Tamil nadu",
      "Andra",
      "kerala",
      "Gujarat"
    ]
  },
  {
    id: 7,
    question: " Which age group people is affected the most due to coronavirus?",
    answer: "41-75yr",
    options: [
      "0-10yrs",
      "11-25yrs",
      "26-40yrs",
      "41-75yrs"
    ]
  },
  {
    id: 8,
    question: " which state is most affected in India due to COVID-19?",
    answer: "Maharastra",
    options: [
      "Tamil nadu",
      "Maharastra",
      "Punjab",
      "Kerala"
    ]
  },
  {
    id: 9,
    question: "How many are Labs testing coronavirus in India? ",
    answer: "52",
    options: [
      "120",
      "64",
      "52",
      "98"
    ]
  },
  {
    id: 10,
    question: " where did the first confrimed death outside occured due to COVID-19? ",
    answer: "France",
    options: [
      "Germany",
      "Italy",
      "America",
      "France "
    ]
  }
  
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // c8heck if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
  
}
