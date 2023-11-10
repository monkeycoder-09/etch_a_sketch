document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const resetButton = document.querySelector(".reset-button");
    let isDrawing = false;

    function createGrid(size) {
        container.innerHTML = "";

        const containerWidth = 500;
        const squareWidth = containerWidth / size - 2;

        for (let i = 0; i < size * size; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.width = `${squareWidth}px`;
            gridSquare.style.height = `${squareWidth}px`;
            // gridSquare.style.width = `calc(${squareWidth}% - 2px)`;
            // gridSquare.style.paddingBottom = `calc(${squareWidth}% - 2px)`;

            gridSquare.addEventListener("mousedown", function () {
                isDrawing = true;
            });

            gridSquare.addEventListener("mouseup", function () {
                isDrawing = false;
            });

            gridSquare.addEventListener("mousemove", function () {
                if (isDrawing) {
                    gridSquare.classList.add("drawn");
                }
            });

            container.appendChild(gridSquare);
        }
    }

    resetButton.addEventListener("click", function () {
        const newSize = prompt("Enter the number of squares per side (max: 16): ");
        const validatedSize = parseInt(newSize, 10);

        // Check if the input is a number and within the limit
        if (!isNaN(validatedSize) && validatedSize > 0 && validatedSize <= 16) {
            createGrid(validatedSize);
        } else {
            alert("Please enter a valid number between 1 and 16.");
        }
    });


    // Initial grid creation
    createGrid(16); // You can set the initial size here
});
