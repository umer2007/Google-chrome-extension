// some coding for an extension....
let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("del-btn")
 let myleadsstorage = JSON.stringify("myLeads") ;

let leadsfromstorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsfromstorage ){
    myLeads = leadsfromstorage
    renderleads(myLeads)
 }

 function renderleads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<a href='${myLeads[i]}' 
        target='_blank'><li>${myLeads[i]}
        </li> </a>`
      }
    
      ulEl.innerHTML = listItems}


 delbtn.addEventListener('dblclick',function(){
    console.log("double clicked!")
 })
 

// // local storage concepts *-
// localStorage.setItem("myName","Muhammad Umer Alam")
//  let myName = localStorage.getItem("myName")
//  console.log(myName)//-*
//  localStorage.clear(myName) 

inputBtn.addEventListener("click", function() {
    var inputOl = inputEl.value.trim();
    if(inputOl === "") {
        window.alert("Input value is empty")        
    }   
    else {
        let linkaddress = "https://" + inputEl.value;
        myLeads.push(linkaddress);  
       
     
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        clearlink();
        renderleads();
        
        console.log(localStorage.getItem("myLeads"))
    }
});
function clearlink(){
    document.getElementById("input-el").value = ""
}





  
//   console.log( Boolean ("")) // falsy
//   console.log( Boolean ("0"))// truthy
//   console.log( Boolean (100))// truthy
//   console.log( Boolean (null))// falsy
//   console.log( Boolean([0]))// truthy
//   console.log( Boolean (-0))//falsy

  
