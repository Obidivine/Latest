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
