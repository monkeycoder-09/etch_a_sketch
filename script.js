document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    for (let i=0; i < 16 * 16; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        gridSquare.addEventListener("mouseenter", function() {
            gridSquare.classList.add("hovered");
        });

        gridSquare.addEventListener("mouseleave", function(){
            gridSquare.classList.remove("hovered");
        });

        container.appendChild(gridSquare);
    }
});