function addValue() {
    let num1 = parseFloat(document.getElementById("input_a").value);
    let num2 = parseFloat(document.getElementById("input_b").value);
    let result = num1 + num2;
    let text = "";

    if (isNaN(num1) || isNaN(num2) || (isNaN(num1) && isNaN(num2))) {

        text = "Please enter 2 numbers";
        console.log(text);
        document.mycalculator.output.value = text;
        focusTextBox();

    }
    else {
        text = num1 + " + " + num2 + " = " + result;
        document.mycalculator.output.value = text;

    }


}

function mulValue() {
    let num1 = parseFloat(document.getElementById("input_a").value);
    let num2 = parseFloat(document.getElementById("input_b").value);
    let result = num1 * num2;
    let text = "";



    if (isNaN(num1) || isNaN(num2) || (isNaN(num1) && isNaN(num2))) {

        text = "Please enter 2 numbers";
        console.log(text);
        document.mycalculator.output.value = text;
        focusTextBox();


    }
    else {
        text = num1 + " \u00D7 " + num2 + " = " + result;
        document.mycalculator.output.value = text;
    }

}
function divValue() {
    let num1 = parseFloat(document.getElementById("input_a").value);
    let num2 = parseFloat(document.getElementById("input_b").value);
    let result = num1 / num2;
    let text = "";



    if (isNaN(num1) || isNaN(num2) || (isNaN(num1) && isNaN(num2))) {

        text = "Please enter 2 numbers";
        console.log(text);
        document.mycalculator.output.value = text;
        focusTextBox();



    }
    else {
        text = num1 + " \u00F7 " + num2 + " = " + result;
        document.mycalculator.output.value = text;
    }

}
function focusTextBox() {

    document.getElementById("input_a").focus();
}


