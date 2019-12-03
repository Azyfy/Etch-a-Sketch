    const container = document.querySelector("#container");
    const buttonClear = document.querySelector("#btnClear");
    const buttonColourful = document.querySelector("#btnColourful");
    let colourfulSwitch = false;
    let colourful;

    createGrid(16);
    function createGrid (gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i=0; i<gridSize; i++) {
        for (let j=0; j<gridSize; j++) {
            gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            gridBox.setAttribute("data-darken", "100");
            container.appendChild(gridBox);
        }
        }




        const box = document.querySelectorAll(".gridBox");
        box.forEach( (gridBox) => {
            gridBox.addEventListener ("mouseenter", (e) => {
                 if (colourfulSwitch == false) {
                    e.target.style.backgroundColor = "black";
                    // e.target.classList.add("gridBoxHover");
                    }
                 else {
                    colourfulMode();
                    e.target.style.cssText = colourful;
                    darkenBox (e.target);
                    }
             }
             );
        }); 
    }

    function deleteGrid () {
        const removeGrid = document.querySelectorAll(".gridBox"); 
        for (let i=0; i<removeGrid.length; i++) {
            container.removeChild(removeGrid[i]);
        }
    } 

    function colourfulMode () {
        let red = Math.floor (Math.random() * 256);
        let green = Math.floor (Math.random() * 256);
        let blue = Math.floor (Math.random() * 256);
        colourful = `background-color: rgb(${red}, ${green}, ${blue})`;
        return colourful;
    }

    function darkenBox (current) {
        let countDarken = current.getAttribute("data-darken");
        if (countDarken>=0) {
            current.style.filter = `brightness(${countDarken}%)`;
            countDarken = countDarken - 10;
            current.setAttribute("data-darken", countDarken);
        }
        else current.style.filter = `brightness(0%)`;
    }



   buttonClear.addEventListener ("click", () => {       
        let gridSize = Number (prompt("Create a new grid. Size 1 - 99", 16));
        while ((gridSize!=Number(gridSize)) || (gridSize>99) || (gridSize<1) ) {
            gridSize = prompt("Input was not a number or not in range. Enter a number from 1 to 99", 16);
        }
        deleteGrid();
        createGrid(gridSize);
   }
   );

   buttonColourful.addEventListener ("click", () => {
        if (colourfulSwitch == false) {
            colourfulSwitch = true;
            }
        else if (colourfulSwitch == true) {
            colourfulSwitch = false;
            }
   });
