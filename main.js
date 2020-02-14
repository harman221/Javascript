function addtoList() 
{
    let ul = document.getElementById("gclist");
    let li = document.createElement("li");
    let p = document.createElement("p");
    let dButton = document.createElement("button");
    dButton.setAttribute("onclick", "removefromList()");
    dButton.setAttribute("class", "deletebutton");
    dButton.innerHTML = "Delete";
    let chkBox = document.createElement("input");
    chkBox.setAttribute("type", "checkbox");
    chkBox.setAttribute("id", "mycb");
    chkBox.setAttribute("onclick", "myFunction()");
    let newItem = document.getElementById("newItem").value;
    let item = document.createTextNode(newItem);
    li.appendChild(chkBox);
    li.appendChild(p);
    li.appendChild(dButton);
    p.innerHTML = newItem;
    p.setAttribute("id", "mypara");
    p.style.display = 'inline-block';
    document.getElementById("gclist").appendChild(li);
    document.getElementById("newItem").value = "";
}

function removefromList() 
{
    let dBfn = document.getElementsByClassName("deletebutton");
    for (i = 0; i < (dBfn.length); i++) 
    {
        dBfn[i].onclick = function() 
        {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function myFunction() {

let checkBox = document.getElementById("mycb");
let listItem = document.getElementById("mypara");
for (j = 0; j < checkBox.length && j < listItem.length; j++) {
        if (checkBox[j].checked) {
            listItem[j].style.textDecoration = "line-through";
        }
        else {
            listItem[j].style.textDecoration = "none";
        }
    }
}
// function taskDone() {
//     chkBox.li.style.textDecoration = "line-through"; // childNode.parentNode ?
// }


// function myFunction() {
//   var checkBox = document.getElementById("mycb");
//   var text = document.getElementById("mypara");
//   if (checkBox.checked == true){
//     text.style.textDecoration = 'line-through';
//   } else {
//      text.style.textDecoration = 'none';
//   }

// }

// function myFunction() {
//   var checkBox = document.getElementById("mycb");
//   var listItem = document.getElementById("mypara");
//   for (var j = 0; j < checkBox.length && j < listItem.length; j++) {
//         if (checkBox[j].checked) {
//             listItem[j].style.textDecoration = "line-through";
//         }
//         else {
//             listItem[j].style.textDecoration = "none";
//         }
//     }

// }

// function myFunction() {
//   var checkBox = document.getElementById("mycb");
//   var text = document.getElementById("mypara");
//   for (j = 0; j < (checkBox.length); j++){
//   checkBox[j].onclick = function(){
//   if (checkBox.checked == true){
//     text.style.textDecoration = 'line-through';
//   } else {
//      text.style.textDecoration = 'none';
//   }
// }
// }
// }

// function myFunction() {
//   var checkBox = document.getElementById("mycb");
//   var text = document.getElementById("mypara");
//   for (j = 0; j < (text.length); j++){
//   if (checkBox.checked == true){
//     text.style.textDecoration = 'line-through';
//   } else {
//      text.style.textDecoration = 'none';
//   }
// }
// }

// function mycheckf(){
// let checkBox = document.getElementById("mycb");
// for(let j = 0; j < checkBox.length; j++){
//   checkBox[i].addEventListener('click', checkIt);
// }
// let text = document.getElementById("mypara");
// //   if (checkBox.checked == true){
// //     text.textDecoration = 'line-through';
// //   } else {
// //      text.textDecoration = 'none';
// // }

// function checkIt(e) {
//   text.style.textDecoration = 'line-through';
// }
// }

// let listItems = document.querySelectorAll('li');



// function checkIt(e) {
//   e.target.style.textDecoration = 'line-through';
// }

// let fetchlist = document.getElementsByTagName("li");
// let dButton = '<button onclick="removefromList()" class="deletebutton">Delete</button>';
// let listdiv = document.getElementById("listdiv");


// for (i = 0; i < fetchlist.length; i++) {
// let span = document.createElement("SPAN");
// let txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// myNodelist[i].appendChild(span);