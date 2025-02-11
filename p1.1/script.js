// program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
};

function clearDisplay() {
    display.value = "";
};

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
};

// backgraound

const backgraound = document.querySelector('.background');

for (let i = 0; i < 2500; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    backgraound.appendChild(box);
};