let value;
const programer = {
    name : "abdullah nur",
    age : 20,
    email : "abduşşah@gmail.com",
    langs: ["python,java,c++"],

    address : {
        city : "mersin",
        street:"menteş",



    },

    work: function(){

        console.log("programcı çalışıyır ...");


    }

}

value = programer;

value = programer.email;

value=programer.langs;

value = programer.address.street;

programer.work();

 const programer = [

     {name:"mustafa murat",age:25},
     {name : "oğuz ",age:23}

];

value = programer[0];

console.log(value);