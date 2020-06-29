var w = innerWidth/3;
var h = 2 * innerHeight/3
var canvas;
var shufflingx;
var shufflingy;
var sorting;
var sum = true;
let xs = [];
let ys = [];
let xmax;
let ymax;
let shufflebtn;
let sortbtn;
let counter = 0;
let condition = 0;
let bubblingx = 1;
let bubblingy = 1;
let image;
let c;

var shuffleArray = function (array, index) {
    let j = Math.floor(Math.random() * (index + 1));
    let temp_value = array[j]
    array[j] = array[index]
    array[index] = temp_value
    // [array[index], array[j]] = [array[j], array[index]];
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
    shuffleCounterx = xs.length - 1
    shuffleCountery = ys.length - 1
}

function preload() {
    image = loadImage('imgs/forest.jpg')
}

function setup() {
    canvas = createCanvas(w, h)
    canvas.parent('canvashere') 
    pixelDensity(1);
    
    sortbtn = createButton('Sort!')
    sortbtn.parent('buttonshere')

    shufflebtn = createButton('Shuffle!')
    shufflebtn.parent('buttonshere')

    sortbtn.mousePressed(() => {
        resetvars();
        shufflingx = false;
        shufflingy = false;
        sorting    = true;
        loop();
    })
    shufflebtn.mousePressed(() => {
        resetvars();
        shufflingx = true;
        shufflingy = true;
        sorting    = false;
        loop();
    })
    sortbtn.mousePressed
    
    
    for (let i = 0; i < width; i++) {
        xs.push(i * 255/height)
    }
    for (let i = 0; i < width; i++) {
        ys.push(i * 255/width)
    }
    xmax = xs.length
    ymax = ys.length
    shuffleCounterx = xs.length - 1
    shuffleCountery = ys.length - 1
    frameRate(1000)
}

shufflingx = false;
shufflingy = false;
sorting = false


function draw() {
    loadPixels();
    if (shufflingx || shufflingy) {
        for (let k = 0; k < 10; k++) {
            shuffleArray(xs, shuffleCounterx);
            shuffleArray(ys, shuffleCountery);
            shuffleCounterx--;
            shuffleCountery--;
            if (shuffleCounterx  == 1|| shuffleCountery == 1) {
                break
            }
        }
        if (shuffleCounterx < 2) {
            shufflingx = false
        }
        if (shuffleCountery < 2) {
            shufflingy = false
        }
        console.log('d')
    }
    else if (!shufflingx && !shufflingy && sorting) {
        for (let k = 0; k < 5000; k++) {
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
        console.log('c')
    }
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            var pix = (x + y * w) * 4;
            // var bright = xs[x] + ys[y]
            // pixels[pix + 0] = bright%255;
            // pixels[pix + 1] = bright%255;
            // pixels[pix + 2] = bright*bright % 255;
            var brightx = xs[x]
            var brighty = ys[y]
            pixels[pix + 0] = brightx
            pixels[pix + 1] = brighty
            pixels[pix + 2] = brighty
            pixels[pix + 3] = 255; 
        }
        updatePixels(); 
    }
}