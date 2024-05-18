// Initialize variables
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ulel-leads");
const ulELtabs = document.getElementById("ulel-tabs");
const delbtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsfromstorage = JSON.parse(localStorage.getItem("myLeads"));

// Load leads from localStorage if available
if (leadsfromstorage) {
    myLeads = leadsfromstorage;
    render(myLeads);
}

// Add event listener to the tab button
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

// Render leads to the DOM
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `<a href='${leads[i]}' target='_blank'><li>${leads[i]}</li></a>`;
    }
    ulEl.innerHTML = listItems;
}

// Add event listener to the delete button
delbtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

// Add event listener to the input button
inputBtn.addEventListener("click", function () {
    var inputOl = inputEl.value.trim();
    if (inputOl === "") {
        window.alert("Input value is empty");
    } else {
        myLeads.push(inputOl);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        clearlink();
        render(myLeads);
    }
});

// Clear the input field
function clearlink() {
    inputEl.value = "";
}
