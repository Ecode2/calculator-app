const ThemeVariable = [
    "--MainBgColor", "--KeyBgColor", "--ScreenBgColor",
    "--NumFgColor", "--FgColor", "--KeyFgColor",
    "--KeyBtnBgColor", "--KeyBtnShadowColor", "--DarkKeyBtnBgColor",
    "--DarkKeyBtnShadowColor", "--RedKeyBtnBgColor", "--RedKeyBtnShadowColor",
    "--CtrlBtnFgColor", "--CtrlToggleFgColor", "--ToggleBgColor",
    "--KeyBtnBgColorActive", "--RedKeyBtnBgColorActive", "--DarkKeyBtnBgColorActive"
];
const Theme1 = [
    "hsl(222, 26%, 31%)", "hsl(223, 31%, 20%)", "hsl(224, 36%, 15%)", 
    "hsl(221, 14%, 31%)", "hsl(0, 0%, 100%)", "hsl(221, 14%, 31%)",
    "hsl(30, 25%, 89%)", "hsl(28, 16%, 65%)", "hsl(225, 21%, 49%)",
    "hsl(224, 28%, 35%)", "hsl(6, 63%, 50%)", "hsl(6, 70%, 34%)",
    "hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(223, 31%, 20%)",
    "hsl(30, 25%, 95%)", "hsl(6, 63%, 56%)", "hsl(225, 21%, 55%)"
];
const Theme2 = [
    "hsl(0, 0%, 90%)", "hsl(0, 5%, 81%)", "hsl(0, 0%, 93%)", 
    "hsl(60, 10%, 19%)", "hsl(0, 0%, 100%)", "hsl(60, 10%, 19%)",
    "hsl(45, 7%, 89%)", "hsl(35, 11%, 61%)", "hsl(185, 42%, 37%)",
    "hsl(185, 58%, 25%);", "hsl(25, 98%, 40%)", "hsl(25, 99%, 27%)",
    "hsl(0, 0%, 100%)", "hsl(60, 10%, 19%)", "hsl(0, 5%, 81%)",
    "hsl(45, 7%, 95%)", "hsl(25, 98%, 46%)", "hsl(185, 42%, 43%)"
];
const Theme3 = [
    "hsl(268, 75%, 9%)", "hsl(268, 71%, 12%)", "hsl(268, 71%, 12%)", 
    "hsl(52, 100%, 62%)", "hsl(198, 20%, 13%)", "hsl(52, 100%, 62%)",
    "hsl(268, 47%, 21%)", "hsl(290, 70%, 36%)", "hsl(281, 89%, 26%)",
    "hsl(285, 91%, 52%)", "hsl(176, 100%, 44%)", "hsl(177, 92%, 70%)",
    "hsl(0, 0%, 100%)", "hsl(52, 100%, 62%)", "hsl(268, 71%, 12%)",
    "hsl(268, 47%, 40%)", "hsl(176, 100%, 50%)", "hsl(281, 89%, 32%)"
];

let opperand = ["+", "-", "/", "*"]


//Add Number To Screen
function addNum(val) {
    let screen = document.getElementById("screen");
    screen.value += val.toString();
}

function delNum() {
    let screen = document.getElementById("screen");
    screenVal = screen.value.split('');
    screenVal.pop();
    screen.value = screenVal.join('');
}

function resetScreen() {
    let screen = document.getElementById("screen");
    screen.value = '';
}

function equateFunc() {
    let screen = document.getElementById("screen");

    let expression = screen.value;

    let individualExp = expression.split('');

    if ( opperand.includes(individualExp[individualExp.length - 1]) ) {
        screen.value = expression;
        return;
    }

    individualExp.forEach((value, index) => {
        if (value === "x") {
            individualExp[index] = "*";
        }
    });

    individualExp = individualExp.join('');
    answer = eval(individualExp);
    screen.value = answer
    
}

// Toggle Themes
function toggleTheme(theme) {

    let theme1 = document.getElementById("theme1");
    let theme2 = document.getElementById("theme2");
    let theme3 = document.getElementById("theme3");

    if (theme == 2 && theme2.checked) {
        ThemeVariable.forEach((variable, index) => {
            theme1.checked = false;
            theme3.checked = false;
            document.documentElement.style.removeProperty(variable);
            document.documentElement.style.setProperty(variable, Theme2[index]);
        });

    } else if (theme == 3 && theme3.checked) {
        ThemeVariable.forEach((variable, index) => {
            theme2.checked = false;
            theme1.checked = false;
            document.documentElement.style.removeProperty(variable);
            document.documentElement.style.setProperty(variable, Theme3[index]);
        });
        
    } else {
        ThemeVariable.forEach((variable, index) => {
            theme2.checked = false;
            theme3.checked = false;
            document.documentElement.style.removeProperty(variable);
            document.documentElement.style.setProperty(variable, Theme1[index]);
        });
    }
}
