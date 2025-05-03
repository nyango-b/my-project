/* js/script.js */
function displayGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
    alert(greeting);
  }
  
  function validateContactForm() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }
  
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
 // Apply saved theme on load
window.onload = function () {
    if (localStorage.getItem("mode") === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  
  // Toggle dark/light mode
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", mode);
  }
  
  // Quiz logic
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("quiz-result");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        let score = 0;
  
        const answers = {
          q1: "Paris",
          q2: "JavaScript",
          q3: "React",
          q4: "Jupiter",
          q5: "HyperText Markup Language",
          q6: "Styling websites",
          q7: "Ctrl + C",
          q8: "CPU",
          q9: "AND gate",
          q10: "Python"
        };
  
        for (let key in answers) {
          const selected = document.querySelector(`input[name="${key}"]:checked`);
          if (selected && selected.value === answers[key]) {
            score++;
          }
        }
  
        let badge = "";
        if (score >= 9) {
          badge = "Master";
        } else if (score >= 6) {
          badge = "Learner";
        } else {
          badge = "Beginner";
        }
  
  
        resultDiv.innerHTML = `
          <h2>You scored ${score}/10</h2>
          <p class="badge ${badge.toLowerCase()}">Badge Earned: ${badge}</p>
        `;
      });
    }
  });
  
  