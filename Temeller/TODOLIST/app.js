
//Elementi Id e göre seçme 

let element;

element = document.getElementById("todo-form");

element = document.getElementById("tasks-title");

// element class a göre seçme 


element= document.getElementsByClassName("list-group-item");

element = document.getElementsByClassName("card-header");



// elementi taga göre seçme 

element = document.getElementsByTagName("li");




//  query selector - css selector 

element =document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element= document.querySelector(".list-group-item");

//quersyselectorall - tüm elemetnleri seçme 

element= document.querySelectorAll(".list-group-item");


console.log( element);



yeni element oluşturma 

const newlink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];



newlink.id = "clear-todos";
newlink.className = "btn btn-danger";

newlink.href= "https://www.google.com.tr";

newlink.target = "_blank";



newlink.appendChild(document.createTextNode("farklı bir sayfaya git"));

cardbody.appendChild(newlink);


console.log(newlink);



dinamik element silme 

const todolist = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item")
 


todos[0].remove();

todolist.removeChild(todos[2]);

console.log(todos);
console.log(todolist);


const filterInput = document.getElementById("filter");

filterInput.addEventListener("focus",function(e){

    console.log("naber"); 

});

