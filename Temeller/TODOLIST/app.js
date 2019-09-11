// window objesi

let value ;

 value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[6];
value=document.all[document.all.length-1];


const element = document.all;
for(let i = 0 ; i < element.length ;i++){

console.log(element[i]);

}


value=document.scripts; 

value=document.scripts.length;
value=document.scripts[0];

// Linkler

value =document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;


//formlar

value = document.forms;
value=document.forms.length;
value=document.forms[0].id;
value=document.forms[0].method;



console.log(value);