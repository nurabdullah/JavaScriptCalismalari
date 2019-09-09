const name = "murat coşkun";
const department = "bilişim";
 const salary = 4000;


 //const a = "isim: "+ name +"\n" + "departman: " + department + "\n" + "maaş:" + salary + "\n"; 

//  const a = `isim:${name}\n Departman:${department}\n maaş:${salary}`; 


// const html = "<ul> " +
//                "<li>" + name + "</li>"+
//                 "<li>"+ department+ "</li>"+
//                 "<li>"+ salary + "</li>"+
//                 "</ul>";
                


//                 document.body.innerHTML=html;


               // en kısa yollu olan ; //               
const html = `
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
</ul>

`;

document.body.innerHTML=html;


// console.log(a);


