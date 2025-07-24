function addtask() {
  const NT = document.getElementById("newtask");

  const AT = document.getElementById("taskList");

  if (NT.value.trim().length > 0) {
    const a = document.createElement("li");

    const b = document.createElement("span");

    const c = document.createElement("button");

    a.classList.add("p-2");

    b.innerText = NT.value.trim();

    c.classList.add("btn", "btn-danger", "mx-4");

    c.innerText = "Delete";

    c.onclick = () => {
      a.remove();
    };

    a.appendChild(b);
    a.appendChild(c);

    AT.appendChild(a);

    NT.value = " ";
  } else {
    alert("No Task to Add");
  }
}
