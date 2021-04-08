/* let a=document;
a=document.all;
a=document.body;
a=document.forms;
a=document.links;
console.log(a); */
//single element selector
/* let a=document.getElementById("myFirst");
a.style.color="red";
a.innerText="it is changed";
a.innerHTML="<b> it is in bold now</b>";
//console.log(a);
let sel=document.querySelector("#myFirst");
sel=document.querySelector(".child");
sel=document.querySelector("h1");
sel.style.color="blue";

console.log(sel);
let elems=document.getElementsByClassName("child");
elems=document.getElementsByTagName("div");
//console.log(elems);
*/
let element=document.createElement("h2");
element.innerText=("hello");
let div=document.querySelector("div.container");
div.appendChild(element);
console.log(element);
