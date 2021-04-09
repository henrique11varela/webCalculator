
var arg = ["", ""];
var mod = "";
var index = 1;
var result = ""

function buttonInput(button) {
    var buttonClass = button.className;
    var screenText = document.getElementById("screen-text");

    if (buttonClass == "argument") {
        if (button.id != "negative" || arg[index] == "") {
            arg[index] += button.value;
            updateScreen();
        }
    }
    else if (buttonClass == "modifier") {
        mod = button.value;
        index++;
        arg[index] = "";
        updateScreen();
    }
    else if (button.id == "equals") {
        if (mod == "/") {
            result = parseFloat(arg[1]) / parseFloat(arg[2]);
        }
        else if (mod == "*") {
            result = parseFloat(arg[1]) * parseFloat(arg[2]);
        }
        else if (mod == "-") {
            result = parseFloat(arg[1]) - parseFloat(arg[2]);
        }
        else if (mod == "+") {
            result = parseFloat(arg[1]) + parseFloat(arg[2]);
        }
        screenText.textContent = result;
    }

    if (buttonClass == "delete") {
        if (button.id == "clean") {
            arg[1] = "";
            arg[2] = "";
            mod = "";
            index = 1;
            result = "";
            updateScreen();
        }
        else if (button.id == "del") {
            if (arg[index] != "") {
                arg[index] = "";
            } else if (index == 2){
                mod = "";
                index--;
            }

            if (result != "") {
                arg[1] = "";
                arg[2] = "";
                mod = "";
                index = 1;
                result = "";
            }

            updateScreen();
        }
    }
   
    if (screenText.className == "active") {
        screenText.className = "";
    } 
    else if (screenText.className == "" && arg[1] == "") {
        screenText.className = "active";
        screenText.textContent = "_";
    }
}

function updateScreen() {
    var screenText = document.getElementById("screen-text");
    screenText.textContent = arg[index-1] + " " + mod + " " + arg[index];
}

