const box = document.getElementById("box")

const addButton = document.getElementById("add")
addButton.addEventListener(
    "click",() => {
        box.classList.add("bordered")
    }
)

const removeButton = document.getElementById("remove")
removeButton.addEventListener(
    "click",() => {
        box.classList.remove("bordered")
    }
)

const toggleButton = document.getElementById("toggle")
toggleButton.addEventListener(
    "click", () => {
        box.classList.toggle("bordered")
    }
)