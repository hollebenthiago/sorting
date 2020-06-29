var shuffleArray = function (array, index) {
    let j = Math.floor(Math.random() * (index + 1));
    let temp_value = array[j]
    array[j] = array[index]
    array[index] = temp_value
}

var swap = function(array, index) {
    if(array[index-1] > array[index]) {
        let temp = array[index-1]
        array[index-1] = array[index]
        array[index] = temp
    }
}

var resetvars = function() {
    xmax = xs.length
    ymax = ys.length
    counter = 0
    bubblingx = 1
    bubblingy = 1
    shuffleCounterx = xs.length - 2
    shuffleCountery = ys.length - 2
}