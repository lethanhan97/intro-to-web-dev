console.log("js imported");

function changeWords() {
  const changeNodes = document.querySelectorAll(".change");
  changeNodes.forEach((node) => {
    node.innerText = "Changed";
  });
}

const changeButton = document.querySelector(".change-button");
changeButton.addEventListener("click", () => {
  changeWords();
});
