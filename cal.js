let display = document.querySelector(".showing");
let eval_showing = document.querySelector(".eval_showing")

// add effect class function
function toggle_remove_effect() {
    display.classList.remove("small_sizing");
    eval_showing.classList.remove("toggle");
}
// remove effect class function
function toggle_add_effect() {
    display.classList.add("small_sizing");
    eval_showing.classList.add("toggle");
}
// show number
function addNumber(n) {
    display.value += n;
    toggle_remove_effect()
}
// show operator
function addop(o) {
    display.classList.remove("small_sizing");
    eval_showing.classList.remove("toggle");
    if (display.value !== "") {

        let lastindex = display.value.slice(-1);
        if (lastindex == "+" || lastindex == "-" || lastindex == "*" || lastindex == "/" || lastindex == "%") {
            display.value = display.value.slide(0, -1) + o;
        }
        else {
            display.value += o;
        }
    }

}
// clear all display 
function cls() {
    display.value = " ";
    toggle_remove_effect()
}
// calculate all data
function eva() {
    eval_showing.value = eval(display.value);
    toggle_add_effect();

}
// del
function del() {
    display.value = display.value.slice(0, -1);
    toggle_remove_effect();
}
// dot

function dot(d) {
    display.value += d;
}
window.addEventListener("keyup", (e) => {
    // key press event function 
    function keys(x) {
        if (e.key == x) {
            display.value += e.key;
            toggle_remove_effect();
        }
    };
    // call keys value
    keys("1");
    keys("2");
    keys("3");
    keys("4");
    keys("5");
    keys("6");
    keys("7");
    keys("8");
    keys("9");
    keys("0");
    keys(".");

    if (e.key == "Enter") {
        eva();

    }
    if (e.key == "Backspace") {
        del();
    }
    if (e.key == "Shift") {

    }
    if (e.key == 'Escape') {

        cls();
    }
    // op

    function event_key_op() {
        if (display.value !== "") {
            if (e.key == '+') {

                display.value += e.key;
                toggle_remove_effect()

            }
            if (e.key == '-') {

                display.value += e.key;
                toggle_remove_effect()
            }
            if (e.key == '*') {

                display.value += e.key;
                toggle_remove_effect()
            }
            if (e.key == '/') {

                display.value += e.key;
                toggle_remove_effect()
            }
            if (e.key == '%') {

                display.value += e.key;
                toggle_remove_effect()
            }

        }
    }
    event_key_op();
})