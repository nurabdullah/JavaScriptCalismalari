karşılşatırma oparötörleri 

==
===
!=
!===
<
>
<=

console.log(2==2);
console.log("js" == "java");
console.log(2 == "2");
console.log(2 === "2");  // bu yöntem daha sağlıklı 
console.log(2<5);
console.log(2!=2);  // eşit değilmi 


mantıksal bağlaçlar 

not oparötörleri 

console.log(!(2 == 2)); 

and oparötörü

console.log((4==2)) && ("ahmet" ==" ahmet ");

 or oparötörü 

 console.log((4==2) || ("ahmet" ==" ahmet ")); 
 



const error = false;

if(error == true){

    console.log("hata oluştu" );

}

else{
    console.log("hata oluşmadı");


}

const process = "8" ;

if(process ===" 1"){

    console.log("işlem 1 ");
}

else if(process ==="2"){
console.log("işlem 2");

} 
else if(process ==="3"){
console.log("işlem 3");

} 
else if(process ==="4"){
console.log("işlem 4");

} 
else{
    console.log("geçersiz işlem"); 
}


ternary oparötör 


 const number = 101;
// console.log(number===100? "sayı 100" : "sayı100 değil ")

 // eğer çok işlem yoksa tek işlemde süslü parantez gerekmez 
if(number ===100) console.log("sayı 100");
else console.log("sayı 100 değil ");






















 


