const ROWS = 14
const COLS = 14

function setup(){

    createCanvas(600,600)
    textAlign(CENTER)
}

let inputA = new Array(COLS).fill(false)
let inputB = new Array(COLS).fill(false)
let outputA = new Array(COLS).fill(false)
let carryA = new Array(COLS).fill(false)

function draw(){

    background(255)
    rectWidth = width / COLS
    addBit(0)
    addBit(90)
    addBit(180)

    updateBit(inputA, 0)
    updateBit(inputB, 90)
    
    mousePressed()
    mouseReleased()
    bitAddition()
    fill(25)
    // Text under InputA
    for(let i = 0; i < COLS; i++){
        let x = i
        text(2 ** i,(rectWidth / 2) + i * rectWidth, 85)
    }

    // Text under InputB
    for(let i = 0; i < COLS; i++){

        text(2 ** i,(rectWidth / 2) + i * rectWidth, 175)
    }

    //Text under OutputA
    for(let i = 0; i < COLS; i++){

        text(2 ** i,(rectWidth / 2) + i * rectWidth, 265)
    }
}

function addBit(y){

    for(let i = 0; i < COLS; i++){
        if (inputA[i] == true && y == 0){

            fill(225,255,23)
        }

        if (inputA[i] == false && y == 0){

            fill(175)
        }

        if (inputB[i] == true && y == 90){

            fill(225,255,23)
        }

        if (inputB[i] == false && y == 90){

            fill(175)
        }

        if (outputA[i] == true && y == 180){

            fill(225,255,23)
        }

        if (outputA[i] == false && y == 180){

            fill(175)
        }
        rect(i * rectWidth, y, rectWidth, rectWidth)
    }
}

function updateBit(input, y){

    for(let i = 0; i < COLS; i++){

        if (isMouseOverRect(i * rectWidth, y, rectWidth, rectWidth) && mouseClick == true){

            if(input[i] < 1){
                
                input[i] = true
            } else {
                
                input[i] = false
            }
        }

    }
}

function isMouseOverRect(x, y, w, h){

    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h
}

function mousePressed(){

    mouseClick = true
}

function mouseReleased(){

    mouseClick = false
}

function bitAddition(){

    for(let i = 0; i < COLS; i++){
        
        if (carryA[i] == false){

            if(inputA[i] == true && inputB[i] == true){

                outputA[i] = false
                carryA[i + 1] = true 
            } else 
                if(inputA[i] == true || inputB[i] == true){

                    outputA[i] = true
                    carryA[i + 1] = false
            } else {

                outputA[i] = false
                carryA[i + 1] = false
            }
        } else {

            if(inputA[i] == true && inputB[i] == true){

                outputA[i] = true
                carryA[i + 1] = true
            } else
                if(inputA[i] == true || inputB[i] == true){

                    outputA[i] = false
                    carryA[i + 1] = true
                } else {

                    outputA[i] = true
                }
        }
    }    
}