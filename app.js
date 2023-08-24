window.addEventListener("load", () => {
  var input = document.querySelector(".content-taskAdd input");
  var button = document.querySelector(".content-taskAdd button");
  var container = document.querySelector(".taskList-boxes");

  button.addEventListener("click", () => {
    if ((input.value.length < 3 && input.value == "") || input.value == " ") {
    } else {

      var box = document.createElement("div");
      box.className = "box";
      container.appendChild(box);

      var boxText = document.createElement("input");
      boxText.className = "box-text";
      boxText.type = "text";
      boxText.value = input.value.trim();
      boxText.setAttribute("readonly", "readonly");
      box.appendChild(boxText);

      var boxButtons = document.createElement("div");
      boxButtons.className = "box-button";
      box.appendChild(boxButtons);

      var editIcon = document.createElement("i");
      editIcon.className = "fa-solid fa-pen-to-square";
      editIcon.style.color = "#005eff";


      var trashIcon = document.createElement("i");
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.style.color = "#C61843";
      trashIcon.style.marginLeft = "15px";

      boxButtons.appendChild(editIcon);
      boxButtons.appendChild(trashIcon);

      editIcon.addEventListener("click", (e) => {
        if (e.target.className == "fa-solid fa-pen-to-square") {
          boxText.removeAttribute("readonly");
          boxText.focus();
          e.target.className = "fa-solid fa-floppy-disk";
        } else {
          e.target.className = "fa-solid fa-pen-to-square";
          boxText.setAttribute("readonly", "readonly");
        }
      });

      trashIcon.addEventListener("click", (e) => {
        container.removeChild(box);
      });

      input.value = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      button.click();
    }
  });
});
