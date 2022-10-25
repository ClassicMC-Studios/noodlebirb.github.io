var ranIndex;
var textOfSomeSort = document.getElementById("correct");
let elements = [
    ["PO3", "Phosphite" ],
    ["PO4", "Phosphate"],
    ["AsO4", "Arsenate"],
    ["BO3", "Borate"]
];

function homepage() {
    window.location.pathname = "/index.html"
}

function checkAnswer() {
    var ans = document.getElementById("answer");
    if (ans.value.toLowerCase().trim() == elements[ranIndex][1].toLowerCase()) {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "Correct!!!";
        cor += 1;
        total += 1;
        setTimeout(changeElement, 1000);
        
        ans.value = "";
    }
    else {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "you got it wrong, it should've been " + elements[ranIndex][1];
        incor += 1;
        total += 1;
        setTimeout(changeElement, 1000);
        
        ans.value = "";
    }
}
function changeElement() {
    var docId = document.getElementById("formula");
    ranIndex = Math.floor(Math.random() * elements.length);
    var ranElement = elements[ranIndex][0]
    docId.innerText = ranElement;
    textOfSomeSort = document.getElementById("correct");
    textOfSomeSort.innerText = "Waiting for input...";
    document.getElementById("corCount").innerText = cor + "/" + total;
    document.getElementById("incorCount").innerText = incor + "/" + total;
}

addEventListener("DOMContentLoaded", changeElement)
