function preload() {
    image = loadImage('imgs/artin.jpg')
}

function setup() {
    canvas = createCanvas(w, h)
    canvas.parent('canvashere') 
    pixelDensity(1);
    image.resize(w, h)

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
        xs.push(i)
    }
    for (let i = 0; i < height; i++) {
        ys.push(i)
    }
    xmax = xs.length
    ymax = ys.length
    shuffleCounterx = xs.length - 1
    shuffleCountery = ys.length - 1
    shufflingx = false;
    shufflingy = false;
    sorting = false
    frameRate(1000)
}

function draw() {
    loadPixels();
    image.loadPixels();
    if (shufflingx || shufflingy) {
        for (let k = 0; k < 10; k++) {
            if (shufflingx) {
                shuffleArray(xs, shuffleCounterx);
                shuffleCounterx--;
            }
            if (shufflingy) {
                shuffleArray(ys, shuffleCountery);
                shuffleCountery--;
            }
            if ((shuffleCounterx  == 1) || (shuffleCountery == 1)) {
                console.log(shuffleCounterx, shuffleCountery)
                break
            }
        }
        if (shuffleCounterx == 1) {
            shufflingx = false
        }
        if (shuffleCountery == 1) {
            shufflingy = false
        }
    }
    else if (!shufflingx && !shufflingy && sorting && bubble) {
        bubblesort(bubblingx, bubblingy, xs, ys)
    }
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            var pix = (x + y * w) * 4
            var sortedpix = (xs[x] + ys[y] * w) * 4
            
            var bright0 = image.pixels[sortedpix + 0]
            var bright1 = image.pixels[sortedpix + 1]
            var bright2 = image.pixels[sortedpix + 2]
            var bright3 = image.pixels[sortedpix + 3]
            
            pixels[pix + 0] = bright0
            pixels[pix + 1] = bright1
            pixels[pix + 2] = bright2
            pixels[pix + 3] = bright3; 
        }
        updatePixels(); 
    }
}