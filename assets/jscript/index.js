const keyDiv = document.querySelector('#key')

const createNewDiv = (color) => {
  const newDiv = document.createElement("div")
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.margin = "10px";
  newDiv.style.marginLeft = "330px";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
 
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a"){
      keyDiv.style.backgroundColor = "pink"
  } else if (event.key === "s"){
      keyDiv.style.backgroundColor = "orange"
  } else if (event.key === "d"){
      keyDiv.style.backgroundColor = "skyblue"
  } else if (event.key === "q"){
      createNewDiv("purple")
  } else if (event.key === "w"){
      createNewDiv("grey")
  } else if (event.key === "e"){
      createNewDiv("brown")
  }
})

