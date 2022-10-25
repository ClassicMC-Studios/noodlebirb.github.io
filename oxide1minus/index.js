var ranIndex;
var cor = 0;
var incor = 0;
var total = 0;
var ind = 0;
let elements = [
    ["H2PO3", "Dihydrogen Phosphite" ],
    ["H2PO4", "Dihydrogen Phosphate"],
    ["HSO3", "Hydrogen Sulfite"],
    ["HSO4", "Hydrogen Sulfate"],
    ["HC2O4", "Hydrogen Oxalate"],
    ["SCN", "Thiocyanate"],
    ["CN", "Cyanide"],
    ["C2H3O2", "Acetate"],
    ["MnO4", "Permanganate"],
    ["HCO3", "Hydrogen Carbonate"],
    ["OH", "Hydroxide"],
    ["NO2", "Nitrite"],
    ["NO3", "Nitrate"],
    ["ClO", "Hypochlorite"],
    ["ClO2", "Chlorite"],
    ["ClO3", "Chlorate"],
    ["ClO4", "Perchlorate"],
    ["IO", "Hypoiodite"],
    ["IO2", "Iodite"],
    ["IO3", "Iodate"],
    ["IO4", "Periodate"],
    ["BrO", "Hypobromite"],
    ["BrO2", "Bromite"],
    ["BrO3", "Bromate"],
    ["BrO4", "Perbromate"]
];

function homepage() {
    window.location.pathname = "/index.html"
}

function checkAnswer() {
    var ans = document.getElementById("answer");
    if (ans.value.toLowerCase().trim() == elements[ranIndex][1-ind].toLowerCase()) {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "Correct!!!";
        cor += 1;
        total += 1;
        setTimeout(changeElement, 1000);
        
        ans.value = "";
    }
    else {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "you got it wrong, go type in " + elements[ranIndex][1-ind];
        incor += 1;
        total += 1;
        
        ans.value = "";
    }
}
function changeElement() {
    var docId = document.getElementById("formula");
    ranIndex = Math.floor(Math.random() * elements.length);
    var ranElement = elements[ranIndex][ind]
    docId.innerText = ranElement;
    textOfSomeSort = document.getElementById("correct");
    textOfSomeSort.innerText = "Waiting for input...";
    document.getElementById("corCount").innerText = cor;
    document.getElementById("incorCount").innerText = incor;
    document.getElementById("totalCount").innerText = total;
}

addEventListener("DOMContentLoaded", changeElement)

function resetCount() {
    total = 0;
    cor = 0;
    incor = 0;
    document.getElementById("corCount").innerText = cor;
    document.getElementById("incorCount").innerText = incor;
    document.getElementById("totalCount").innerText = total;
}

function swap() {
    ind = 1 - ind;
    changeElement();
    let label = ["answer with symbols", "answer with name"];
    document.getElementById("swap").innerText = label[ind];
}
