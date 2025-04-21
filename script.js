let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let screenValue = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === "=") {
            try {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } catch {
                screen.value = "Error";
                screenValue = "";
            }
        } else if (buttonText === "AC") {
            screenValue = "";
            screen.value = "";
        } else if (buttonText === "DEL") {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        } else if (buttonText === "x^y") {
            screenValue += "**";
            screen.value = screenValue;
        } else if (buttonText === "%") {
            screenValue = (eval(screenValue) / 100).toString();
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
});


