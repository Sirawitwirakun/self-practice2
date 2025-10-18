const box = document.body
const bgcolor = document.getElementById("bgColor")
const fontcolor = document.getElementById("fontColor")
const fontSize = document.getElementById("fontSize")
const saveButton = document.getElementById("saveBtn")
const resetButton = document.getElementById("resetBtn")
const defaultButton = document.getElementById("defaultBtn") 

document.addEventListener(
    "DOMContentLoaded", () => {
        box.style.backgroundColor = localStorage.getItem("bgcolor")
        box.style.color = localStorage.getItem("fontcolor")
        box.style.fontSize = localStorage.getItem("fontSize")
    })
 
 
saveButton.addEventListener(
    "click", () => {
        box.style.backgroundColor = bgcolor.value
        localStorage.setItem("bgcolor",bgcolor.value)
        box.style.color = fontcolor.value
        localStorage.setItem("fontcolor",fontcolor.value)
        box.style.fontSize = fontSize.value
        localStorage.setItem("fontSize",fontSize.value)
        if (localStorage.getItem("fontSize") === "Small"){
            box.style.fontSize = "10px"
        }else if (localStorage.getItem("fontSize") === "Medium"){
            box.style.fontSize = "20px"
        }else if (localStorage.getItem("fontSize") === "Large"){
            box.style.fontSize = "40px"
        }
    }
)
 
resetButton.addEventListener(
    "click", () => {
        localStorage.clear()
    } 
)

defaultButton.addEventListener(
    "click" , () => {
        localStorage.setItem("bgcolor","#ffffff")
        localStorage.setItem("fontcolor","#000000")
        localStorage.setItem("fontSize","Medium")
    }
)