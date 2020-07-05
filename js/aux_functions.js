function removefromArray(array, element) {
    for (let i = array.length-1; i >= 0; i--) {
        if (array[i][0] ==  element[0] && array[i][1] ==  element[1]) {
            array.splice(i, 1);
        }
    }
}

var shuffleArray = function (array, index) {
    let j = Math.floor(Math.random() * (index + 1));
    let temp_value = array[j]
    array[j] = array[index]
    array[index] = temp_value
}

var change = function(array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

var swap = function(array, index) {
    if(array[index-1] > array[index]) {
        change(array, index, index-1)
    }
}


var partition = function(array, start, end) {
    let pivot = array[end]
    let i = start
    for (let j = start; j <= end; j++) {
        if (array[j] < pivot) {
            change(array, i, j)
            i++
        }
    }
    change(array, i, end)
    return i;
}

var resetvars = function() {
    xmax = xs.length
    ymax = ys.length
    counter = 0
    bubblingx = 1
    bubblingy = 1
    shuffleCounterx = xs.length - 2
    shuffleCountery = ys.length - 2
    percent = 0;
    sizePartitions = 100
}