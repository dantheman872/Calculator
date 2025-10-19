const ROWS = 8
const COLS = 8

function setup(){

    createCanvas(600,600)
}

let inputA = [0,0,0,0,0,0,0,0]


function draw(){

    background(255)
    rectWidth = width / COLS

    for(let i = 0; i < COLS; i++){

        let x = i * rectWidth
        if (isMouseOverRect(x,0, rectWidth, rectWidth) && mouseIsPressed){

            fill(0,0,255)
            inputA[i] = 1
        } else {
            noFill()
            inputA[i] = 0
        }

        rect(x,0,rectWidth)
        console.log(inputA)
    }

    for(let i = 0; i < COLS; i++){

        let x = i * rectWidth
        if (inputA[i] = 1){

            fill(255)
        } else{

            noFill()
        }
        rect(x, 75, rectWidth)
    }

    // if (isMouseOverRect(0,0,75,75) && mouseIsPressed){

    //     if(inputA[0] === 1){

    //         inputA[0] = 0
    //         fill(255)
    //     } else {

    //         inputA[0] = 1
    //         fill(0)
    //     }
    // }
}

function isMouseOverRect(x, y, w, h){

    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h
}