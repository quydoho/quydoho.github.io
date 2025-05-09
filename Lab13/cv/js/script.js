function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.querySelector(".toggle-dark");
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
  localStorage.setItem("dark-mode", body.classList.contains("dark"));
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    document.querySelector(".toggle-dark").textContent = "🌞";
  }

  document.querySelector(".toggle-dark").addEventListener("click", toggleDarkMode);

  setupScrollAnimations();
  // Chức năng đánh dấu nav (nếu có)
  setupActiveNavHighlight();
});

function exportPDF() {
  const element = document.getElementById("pdf-content");
  const opt = {
    margin: 0.5,
    filename: "cv-nguyenvana.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}

function setupScrollAnimations() {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((card) => observer.observe(card));
}


