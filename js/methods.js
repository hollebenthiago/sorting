var bubblesort = function(bubblingx, bubblingy, xs, ys) {
    for (let k = 0; k < 1000; k++) {
        if (bubblingx == xmax && xmax > 0) {
            xmax --;
            bubblingx = 1;
        }
        if (bubblingy == ymax && ymax > 0) {
            ymax --;
            bubblingy = 1;
        }
        if (xmax == 0 && ymax == 0) {
            noLoop()
            
        }
        swap(xs, bubblingx)
        swap(ys, bubblingy)
       
        bubblingx++;
        bubblingy++;
    }
}

var quicksort = function(array, start, end, whichArray) {
    justStarted = false;
    if (start < end) {
        let rightPos = partition(array, start, end)
        quicksort(array, start, rightPos - 1, whichArray)
        quicksort(array, rightPos + 1, end, whichArray)
    }
}