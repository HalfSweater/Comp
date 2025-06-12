// Quiz Questions
const quizQuestions = [
  {
    question: "1. What is the main purpose of a computer network?",
    options: [
      "To make computers expensive",
      "To connect computers and share resources",
      "To slow down communication",
      "To increase computer heat"
    ],
    answer: 1,
    explanation: "A computer network connects computers and devices to share resources like files, printers, and internet."
  },
  {
    question: "2. Which device is used to connect different networks together?",
    options: [
      "Switch",
      "Modem",
      "Router",
      "Cable"
    ],
    answer: 2,
    explanation: "A router connects different networks and directs data traffic between them."
  },
  {
    question: "3. Which of the following is a wireless communication medium?",
    options: [
      "Twisted pair cable",
      "Fiber optic cable",
      "Radio waves",
      "Coaxial cable"
    ],
    answer: 2,
    explanation: "Radio waves are used for wireless communication such as Wi-Fi and Bluetooth."
  },
  {
    question: "4. What does LAN stand for?",
    options: [
      "Large Area Network",
      "Local Area Network",
      "Limited Area Network",
      "Lightweight Area Network"
    ],
    answer: 1,
    explanation: "LAN stands for Local Area Network."
  },
  {
    question: "5. In which topology are all computers connected to a single central cable?",
    options: [
      "Star",
      "Bus",
      "Ring",
      "Mesh"
    ],
    answer: 1,
    explanation: "In bus topology, all computers are connected to a single backbone cable."
  },
  {
    question: "6. Which layer of the OSI model is responsible for end-to-end delivery?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Application Layer"
    ],
    answer: 2,
    explanation: "Transport layer is responsible for end-to-end delivery of messages."
  },
  {
    question: "7. What is the function of a switch in networking?",
    options: [
      "Connects devices in a LAN and forwards data to the correct device",
      "Connects to the Internet",
      "Converts digital signals to analog",
      "Provides wireless connectivity"
    ],
    answer: 0,
    explanation: "A switch connects devices in a LAN and forwards data only to the intended device."
  },
  {
    question: "8. Which protocol is primarily used for web communication?",
    options: [
      "FTP",
      "SMTP",
      "HTTP",
      "POP3"
    ],
    answer: 2,
    explanation: "HTTP (HyperText Transfer Protocol) is primarily used for web communication."
  },
  {
    question: "9. What is the smallest network type?",
    options: [
      "WAN",
      "MAN",
      "LAN",
      "PAN"
    ],
    answer: 3,
    explanation: "PAN (Personal Area Network) is the smallest type, such as Bluetooth around a person."
  },
  {
    question: "10. In a client-server architecture, what is the role of the client?",
    options: [
      "To provide services",
      "To request services",
      "To manage the network",
      "To connect two networks"
    ],
    answer: 1,
    explanation: "Clients request services from servers."
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const quizContent = document.getElementById('quizContent');
const nextBtn = document.getElementById('nextBtn');
const quizProgress = document.getElementById('quizProgress');
const quizResult = document.getElementById('quizResult');
const quizForm = document.getElementById('quizForm');

function renderQuestion(idx) {
  const q = quizQuestions[idx];
  let html = `<div class="quiz-question">${q.question}</div><div class="quiz-options">`;
  q.options.forEach((opt, i) => {
    html += `
      <label>
        <input type="radio" name="option" value="${i}" ${userAnswers[idx] == i ? 'checked' : ''}>
        ${opt}
      </label>
    `;
  });
  html += `</div>`;
  quizContent.innerHTML = html;

  // Highlight selection for better UX
  document.querySelectorAll('.quiz-options label').forEach(label => {
    label.onclick = function() {
      document.querySelectorAll('.quiz-options label').forEach(l => l.classList.remove('selected'));
      this.classList.add('selected');
    };
  });

  quizProgress.textContent = `Question ${idx + 1} of ${quizQuestions.length}`;
  nextBtn.textContent = idx === quizQuestions.length - 1 ? "Finish" : "Next";
}

function showResult() {
  quizContent.style.display = "none";
  quizForm.style.display = "none";
  let html = `<div class="quiz-result">You scored ${score} out of ${quizQuestions.length}!</div>`;
  html += "<div>";
  quizQuestions.forEach((q, i) => {
    const correct = userAnswers[i] == q.answer;
    html += `<div class="quiz-explanation">
      <strong>Q${i+1}:</strong> ${q.question}<br>
      <strong>Your answer:</strong> ${q.options[userAnswers[i]] || "<i>No answer</i>"} <br>
      <strong>Correct answer:</strong> ${q.options[q.answer]}<br>
      ${correct ? '<span style="color:#00ffa0;font-weight:700;">Correct!</span>' : '<span style="color:#ff5566;font-weight:700;">Incorrect.</span>'}
      <br><em>${q.explanation}</em>
    </div>`;
  });
  html += "</div>";
  quizResult.innerHTML = html;
}

nextBtn.onclick = function() {
  const sel = document.querySelector('input[name="option"]:checked');
  if (!sel) {
    alert("Please select your answer before proceeding.");
    return;
  }
  const ans = parseInt(sel.value);
  userAnswers[currentQuestion] = ans;
  if (ans === quizQuestions[currentQuestion].answer) score++;

  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    renderQuestion(currentQuestion);
  } else {
    showResult();
  }
};

window.onload = function() {
  renderQuestion(0);
};