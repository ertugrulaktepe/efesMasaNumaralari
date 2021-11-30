const getNumber = () => {
  for (var i = 1; i <= 100; i++) {
    const main = document.querySelector(".main-desc");
    const number = document.createElement("div");
    number.className = "number";
    number.innerHTML = `<span class="person">${i}</span>`;
    main.appendChild(number);

    number.addEventListener("dblclick", (e) => {
      if (e.target.className === "number") {
        alert("pasifize edildi");
        number.classList.add("show");
      } else {
        alert(" oyuna eklendi");
        number.classList.remove("show");
      }
      e.preventDefault();
    });
  }
};

getNumber();
