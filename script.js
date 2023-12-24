const display = document.querySelector("#display");

const buttons= document.querySelectorAll("button");

buttons.forEach((item) => {

item.onclick = () => {

if (item.id == "clear") {

display.inner Text = "";

} else if (item.id == "backspace") {

let string display.inner Text.toString();

display.inner Text = string.substr(0, string.length-1);

} else if (display.inner Text != "" && item.id == "equal") {

display. innerText = eval(display.innerText);

} else if (display.inner Text == " && item.id == "equal") {

display.inner Text = "Empty!":

setTimeout(() => (display.innerText = ""), 2000);

} else {

display.inner Text += item.id;

 
}
};

});

const theme ToggleBtn = document.querySelector(".theme-toggler");

const calculator document.querySelector(".dark");

const toggleicon = document.querySelector(".toggler-icon");

let isDark = true;

theme Toggleßtn.onclick = () => {

calculator.classList.toggle("dark");

theme Toggle Btn.classList.toggle("active");

isDark=!isDark;

};
