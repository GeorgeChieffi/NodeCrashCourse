const a = document.getElementById("container")
const pTag = document.createElement("p");
const text = document.createTextNode("Hello World through JS");

pTag.appendChild(text);
a.appendChild(pTag);