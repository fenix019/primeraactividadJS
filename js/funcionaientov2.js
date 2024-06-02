function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearEntry() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
