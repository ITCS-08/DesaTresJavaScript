
const divUno = document.querySelector('#ele1')
const divDos = document.querySelector('#ele2')
const divTres = document.querySelector('#ele3')
const divCuatro = document.querySelector('#ele4')
const keyDiv = document.querySelector('#key')


    const changeBackgroundColor = (event) => {

        event.target.style.backgroundColor != "black"
        if (event.target.style.backgroundColor != "black"){
            event.target.style.backgroundColor = "black"
            return
        }
        event.target.style.backgroundColor = "grey"
    }      
        

    // Ejecución de Función cambio de colores

    divUno.addEventListener("click", changeBackgroundColor)
    divDos.addEventListener("click", changeBackgroundColor)
    divTres.addEventListener("click", changeBackgroundColor)
    divCuatro.addEventListener("click", changeBackgroundColor)

    const createNewDiv = (color) => {
        const newDiv = document.createElement("div")
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.margin = "20px";
        newDiv.style.backgroundColor = color;
        document.body.appendChild(newDiv);
       
    };

    document.addEventListener("keydown", function (event) {
        if (event.keyDiv === "a"){
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

