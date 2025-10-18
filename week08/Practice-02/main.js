const box = document.getElementById("box")
const buttons = document.getElementsByTagName("button")

Array.from(buttons).forEach((button) =>
  button.addEventListener(
    "click", () => {
    box.style.backgroundColor = button.dataset.color
    box.textContent = button.dataset.color.toUpperCase()
        }
    )
)
 