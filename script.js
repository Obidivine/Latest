function trackPackage() {
  const input = document.getElementById("trackingInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const loader = document.getElementById("loading");

  errorMsg.textContent = "";

  if (input === "PKG6647BV7786544GGV00843") {
    loader.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "package.html";
    }, 2000); // Simulate loading
  } else {
    errorMsg.textContent = "Can't find item";
  }
}
// Animate progress bar steps on package.html
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll("#progressBar .step");
  if (steps.length > 0) {
    let index = 0;
    const interval = setInterval(() => {
      if (index > 0) steps[index - 1].classList.remove("active");
      steps[index].classList.add("completed");
      steps[index].classList.add("active");
      index++;
      if (index === steps.length - 1) {
        clearInterval(interval); // stop before Delivered
      }
    }, 1500); // 1.5s per step
  }
});
