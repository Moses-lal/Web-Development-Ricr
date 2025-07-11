 function submit(){
  const name1 =document.getElementById("fullname").value;

  console.log(name1);

  const data1 = document.getElementById("data");
  
  data1.innertext=name1;
  data.innerHTML="<b>" + name1 + "</b>"
  
  console.log(data1);
  
 }

  

const sampleText = document.getElementById("sample");


console.log(sampleText);


console.log("Inner HTML",sampleText.innerHTML);
console.log("Inner Text");

console.log(sampleText.innerText);

console.log("Text Content");
console.log(sampleText.textContent);






