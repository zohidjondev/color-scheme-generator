const actionButton = document.querySelector("#get-color-scheme");

actionButton.addEventListener("click", () => {
  const colorInput = document.querySelector("#input-color").value;
  const schemeMode = document.querySelector("#scheme-mode").value;
  fetch(
    // prettier-ignore
    `https://www.thecolorapi.com/scheme?hex=${colorInput.slice(1)}&mode=${schemeMode}`
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.colors.length; i++) {
        // prettier-ignore
        document.querySelector(`.c${i}`).style.backgroundColor = `${data.colors[i].hex.value}`;
        document.querySelector(
          `.v${i} p`
        ).textContent = `${data.colors[i].hex.value}`;
      }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 5; i++) {
    document.querySelector(`.c${i}`).addEventListener("click", () => {
      navigator.clipboard.writeText(
        document.querySelector(`.c${i}`).style.backgroundColor
      );
      alert("Copied to clipboard");
    });
  }
});
