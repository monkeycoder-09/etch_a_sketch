document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const clearButton = document.querySelector(".clear-button");
    const slider = document.querySelector("#grid-slider");
    const sliderValue = document.querySelector("#slider-value");
    const eraserButton = document.querySelector(".eraser-button");
    let isDrawing = false;
    let isErasing = false;

    function createGrid(size) {
        container.innerHTML = "";

        const containerWidth = 500;
        const squareWidth = containerWidth / size;

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
                    if(isErasing) {
                        gridSquare.classList.remove("drawn");
                    }else {
                        gridSquare.classList.add("drawn");
                    }
                }   
            });

            container.appendChild(gridSquare);
        }
    }

    clearButton.addEventListener("click", function () {
        createGrid(slider.value);
    });

    slider.addEventListener("input", function(){
        createGrid(slider.value)
        sliderValue.textContent = slider.value;
    })

    eraserButton.addEventListener("click", function() {
        eraserButton.classList.toggle("active");
        isErasing = eraserButton.classList.contains("active");
    })


    // Initial grid creation
    createGrid(slider.value); // You can set the initial size here
});
