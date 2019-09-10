let value 

const numbers = [45,85,31,59,32,45,36];

// const numbers2= new Array(1,2,3,4,5,6);

const langs = ["python , java, c++ , js"];
const a = ["merhaba",22,null,undefined,3.14];

//uzunluk
value=numbers.length;

//indexleme
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];

//herhangi bir indexi değer değiştirme 


numbers[2] = 1000;

value=numbers;

//index of

value=numbers.indexOf(1000);

//arrayin sonuna değer ekleme

numbers.push(20000);

value=numbers;
// başına ekleme
numbers.unshift(30000);
value=numbers;

// sonundan değer atma 
numbers.pop();


value=numbers;


// başından değer atma 

numbers.shift();
value=numbers;

// belli bir kısmını atma

numbers.splice(0,3);
value=numbers;

// reverse

numbers.reverse();

value=numbers;

// sıralama 
value=numbers.sort();




console.log(value);