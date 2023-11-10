let isDrawing = false;


document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    for (let i=0; i < 16 * 16; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        gridSquare.addEventListener("mousedown", function() {
            isDrawing = true;
        });

        gridSquare.addEventListener("mouseup", function() {
            isDrawing = false;
        });

        gridSquare.addEventListener("mousemove", function(){
            if (isDrawing) {
                gridSquare.classList.add("drawn")
            }
        });

        container.appendChild(gridSquare);
    }
});