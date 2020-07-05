var sortPress = function () {
    resetvars();
    shufflingx = false;
    shufflingy = false;
    sorting    = true;
    loop();
}

var shufflePress = function () {
    resetvars();
    shufflingx = true;
    shufflingy = true;
    sorting    = false;
    loop();
}

var methodChanged = function () {
    resetvars();
    if (methodSelect.value() == 'Bubble sort') {
        quick = false
        bubble = true
    }
    else if (methodSelect.value() == 'Quick-ish sort') {
        quick = true
        bubble = false
    }
}