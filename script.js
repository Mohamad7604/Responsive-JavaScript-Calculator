function append(character) {
    const display = document.getElementById("display");
    if (display.value === "0") {
        display.value = character;
    } else {
        display.value += character;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function backSpace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

document.getElementById("c").addEventListener("click", clearDisplay);
document.getElementById("dash").addEventListener("click", backSpace);
document.getElementById("equal").addEventListener("click", calculate);

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", function() {
        const value = this.textContent;
        if (!isNaN(value) || ["+", "-", "*", "/"].includes(value)) {
            append(value);
        }
    });
});
