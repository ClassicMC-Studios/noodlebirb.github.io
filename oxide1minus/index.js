var ranIndex;
global var cor = 0;
global var incor = 0;
global var total = 0;
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
    document.getElementById("corCount").innerTEXT = cor + "/" + total;
    document.getElementById("incorCount").innerTEXT = incor + "/" + total;
}

addEventListener("DOMContentLoaded", changeElement)
