//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
const div = document.getElementById("demo")
const p = document.createElement("p")
div.appendChild(p)
//1.5 add format='italic' attribute to <p>
p.setAttribute("format","italic")
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
const text1 = document.createElement("p")
text1.setAttribute("format","italic")
text1.innerHTML = "<i>Sample Italic Text</i>"
//2.2  add <i>Sample Italic Text</i> with innerText
const text2 = document.createElement("p")
text2.setAttribute("format","italic")
text2.innerText = "<i>Sample Italic Text</i>"
//2.3 add <i>Sample Italic Text</i> with textContent
const text3 = document.createElement("p")
text3.setAttribute("format","italic")
text3.textContent = "<i>Sample Italic Text</i>"

div.appendChild(text1)
div.appendChild(text2)
div.appendChild(text3)