document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const gifResult = document.querySelector(".gif-result");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");

  noBtn.addEventListener("mouseover", () => {
      const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
      const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
  });

  yesBtn.addEventListener("click", () => {
      questionContainer.style.display = "none";
      heartLoader.style.display = "inherit";

      setTimeout(() => {
          heartLoader.style.display = "none";
          resultContainer.style.display = "block"; // Make sure it's set to 'block'
          if (gifResult) gifResult.play();
      }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const btnOpen = document.getElementById("open");
    const btnReset = document.getElementById("reset");

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }

    function closeEnvelope() {
        envelope.classList.add("close");
        envelope.classList.remove("open");

        const link = document.createElement("a");
        link.href = "piccuz.pdf"; // Ensure the PDF file exists in the same directory
        link.download = "piccuz.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnReset.addEventListener("click", closeEnvelope);
});


