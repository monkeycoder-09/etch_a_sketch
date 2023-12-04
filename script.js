document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const clearButton = document.querySelector(".clear-button");
    const slider = document.querySelector("#grid-slider");
    const sliderValue = document.querySelector("#slider-value");
    const eraserButton = document.querySelector(".eraser-button");
    const colorModeBtn = document.querySelector(".color-mode-btn");
    const colorPick = document.querySelector(".colorpicker");
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

            gridSquare.addEventListener("mousedown", function () {
                isDrawing = true;
                isErasing = eraserButton.classList.contains("active");
            });

            gridSquare.addEventListener("mouseup", function () {
                isDrawing = false;
            });

            gridSquare.addEventListener("mousemove", function () {
                if (isDrawing) {
                    if (isErasing) {
                        gridSquare.style.backgroundColor = ""; // Use the eraser logic
                    } else {
                        const selectedColor = colorPick.value;
                        gridSquare.style.backgroundColor = selectedColor;
                    }
                }
            });

            container.appendChild(gridSquare);
        }
    }




    // function createGrid(size) {
    //     container.innerHTML = "";

    //     const containerWidth = 500;
    //     const squareWidth = containerWidth / size;

    //     for (let i = 0; i < size * size; i++) {
    //         const gridSquare = document.createElement("div");
    //         gridSquare.classList.add("grid-square");
    //         gridSquare.style.width = `${squareWidth}px`;
    //         gridSquare.style.height = `${squareWidth}px`;
            
    //         gridSquare.addEventListener("mousedown", function () {
    //             isDrawing = true;
    //             isErasing = eraserButton.classList.contains("active");
    //             isColorMode = colorModeBtn.classList.contains("active");
    //             if (isColorMode) {
    //                 const selectedColor = colorPick.value;
    //                 gridSquare.style.backgroundColor = selectedColor;
    //             }
    //         });

    //         gridSquare.addEventListener("mouseup", function () {
    //             isDrawing = false;
    //         });

    //         gridSquare.addEventListener("mousemove", function () {
    //             if (isDrawing) {
    //                 if (isErasing) {
    //                     gridSquare.classList.remove("drawn");
    //                 } else if (isColorMode) {
    //                     const selectedColor = colorPick.value;
    //                     gridSquare.style.backgroundColor = selectedColor;
    //                     gridSquare.classList.add("drawn");
    //                 }
    //                 else {
    //                     gridSquare.classList.add("drawn");
    //                 }
    //             }
    //         });

    //         container.appendChild(gridSquare);
    //     }
    // }

    slider.addEventListener("input", function() {
        createGrid(slider.value)
        sliderValue.textContent = slider.value;
    });

    colorModeBtn.addEventListener("click", function () {
        colorModeBtn.classList.toggle("active");
        eraserButton.classList.remove("active");
        isColorMode = colorModeBtn.classList.contains("active");
        isErasing = false;
        isDrawing = false;
    });

    eraserButton.addEventListener("click", function() {
        eraserButton.classList.toggle("active");
        colorModeBtn.classList.remove("active");
        isErasing = eraserButton.classList.contains("active");
        isColorMode = false;
        isDrawing = false;
    });


    clearButton.addEventListener("click", function () {
        createGrid(slider.value);
    });
    
    createGrid(slider.value); // You can set the initial size here
    
    
});
