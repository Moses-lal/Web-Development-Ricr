function submit() {
  const nm = document.getElementById("name");
  const em = document.getElementById("email");
  const ph = document.getElementById("phone");

  console.log(name, email, phone);

  const userentry = { name: nm, email: em, phone: ph };

  console.log(userentry);
   
  let datashow=JSON.parse(localStorage.getItem())
  
  

}
