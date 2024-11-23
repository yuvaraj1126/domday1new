// let heading = document.getElementById("heading")

// console.log("heading")
// heading.innerText="<h1>Welcome to DOM</h1>"
// heading.innerHTML="<h1>Welcome to DOM</h1>"

// let  main =document.getElementById("main");
// let h1=document.createElement("h1");
// h1.innerText="Element created using JS";
// h1.setAttribute("style","text-align:center;color:yellow;background:blue;padding:10px 0");

// h1.append(" Appended using append()");
// main.append("append will append string also dom node, DOM node means created tag eg h1 and appendchild will append only dom node");
// main.appendChild(h1);

// let listitem= document.getElementsByClassName("list-item");
// // console.log(listitem)

// for (let i=0; i<listitem.length;i++){
// listitem[i].append(i)

// }

let main =document.getElementById("main");
console.log("main")
let h1=document.createElement("h1");
h1.innerText="DOM Manipulation is fun"
main.appendChild(h1)


// let  main =document.getElementById("main");
// let h1=document.createElement("h1");
// h1.innerText="Element created using JS";