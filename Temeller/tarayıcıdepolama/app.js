// session storage 

//buton seçmek 

const add = document.querySelector("#add");
const del =document.querySelector( "#delete" );
const celar = document.querySelector("#claer");


// ınputlar 

const addkey = document.querySelector("#addkey");   
const addvalue = document.querySelector("#addvalue");   
const deletekey = document.querySelector("#deletekey");   

add.addEventListener("click" , addItem);
del.addEventListener("click" , deleteItem );
clear.addEventListener("click" , clerItems);

function addItem(e) {

    sessionStorage.setItem(addkey.value, addvalue.value );

} 

function deleteItem(e) {

    sessionStorage.removeItem(deletekey.value)

}

function clerItems(e) {

    sessionStorage.clear();

}