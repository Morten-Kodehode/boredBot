document.querySelector("button").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((resonse) => resonse.json())
    .then((data) => {
      document.querySelector("h4").textContent = data.activity;
    });
});
