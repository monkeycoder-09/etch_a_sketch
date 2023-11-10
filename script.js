document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    for (let i=0; i < 16 * 16; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        container.appendChild(gridSquare);
    }
});