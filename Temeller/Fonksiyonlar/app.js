
fonksiyon tanımlama 

function merhaba(name = "bilgi yok ",age="bilgi yok"){


 if(typeof name === "undefined") name==="bilgi yok";   
 if(typeof age === "undefined") age==="bilgi yok";   
console.log(`isim: ${name} yaş: ${age}`);



}

merhaba("ayşe",25);

merhaba();
merhaba("kadir");

function square(x){


    return x*x;
    
    console.log("naber"); // hiçbir zaman çalışmaz ...

} 
function cube(x){

return x*x*x ;
}    

let a = cube(square(12));
 

console.log(a);


function merhaba(){

    return "merhaba";

}

console.log(merhaba());

function expression


const merhaba = function(name){

console.log("merhaba" + name);
};

merhaba(" murat ");


immediately invoked function expression (LIFE)




(function(name){

console.log("merhaba "+ name );


})("abdullah");


        const database = {

        host: "localhost",

        add:function(){
        console.log("eklendi");

    },

        get:function(){

        console.log("elde edildi");

    },
        update:function(id){

        console.log(`Id: ${id} güncellendi `)

     },
       
        delete:function(id){

         console.log(`Id: ${id} silindi `)

    },


}


    console.log(database.host);
    database.delete(10);

