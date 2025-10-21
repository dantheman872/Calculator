const ROWS = 11
const COLS = 11

function setup(){

    createCanvas(600,600)
    textAlign(CENTER)
}

let setting = new Array(COLS).fill(false)
let inputA = new Array(COLS-3).fill(false)
let inputB = new Array(COLS-3).fill(false)
let outputA = new Array(COLS-2).fill(false)
let carryA = [false]

function draw(){

    background(255)
    rectWidth = width / COLS
    addBit(11,0)
    addBit(8,180)
    addBit(8,270)
    addBit(9,450)

    updateBit(setting, 0, 0)
    updateBit(inputA, 180, 3)
    updateBit(inputB, 270, 3)
    
    mousePressed()
    mouseReleased()
    fill(25)

    textSize(10)
    // Text under settings
    for(let i = 0; i < COLS; i++){
        let settingText = ['Add','Subtract','AND','NAND','OR','NOR','XOR','XNOR','IMPLIES','NIMPLIES','Right Shift']
        text(settingText[i], (rectWidth /2) + i * rectWidth, 80)
    }

    textSize(20)
    // Text under InputA
    for(let i = 0; i < COLS - 3; i++){
        let x = i
        text(2 ** i,(rectWidth / 2) + i * rectWidth, 260)
    }

    // Text under InputB
    for(let i = 0; i < COLS - 3; i++){

        text(2 ** i,(rectWidth / 2) + i * rectWidth, 350)
    }

    //Text under OutputA
    for(let i = 0; i < COLS - 2; i++){

        text(2 ** i,(rectWidth / 2) + i * rectWidth, 530)
    }

    //What setting
    if(setting[0] == true){

        bitAddition();
    } else

    if(setting[1] == true){

        bitSubtraction();
    } else

    if(setting[2] == true){

        bitAND();
    } else

    if(setting[3] == true){

        bitNAND();
    } else

    if(setting[4] == true){

        bitOR();
    } else

    if(setting[5] == true){

        bitNOR();
    } else

    if(setting[6] == true){

        bitXOR();
    } else

    if(setting[7] == true){

        bitXNOR();
    } else

    if(setting[8] == true){

        bitImplies();
    } else 

    if(setting[9] == true){

        bitNImplies();
    } else

    if(setting[10] == true){

        bitRightShift();
    } else {

        outputA.fill(false)
    }
}


function addBit(l, y){

    for(let i = 0; i < l; i++){

        if (setting[i] == true && y == 0){

            fill(225,255,23)
        } 

        if (setting[i] == false && y == 0){

            fill(175)
        }

        if (inputA[i] == true && y == 180 && i < l){

            fill(225,255,23)
        }

        if (inputA[i] == false && y == 180 && i < l){

            fill(175)
        }

        if (inputB[i] == true && y == 270 && i < l){

            fill(225,255,23)
        }

        if (inputB[i] == false && y == 270 && i < l){

            fill(175)
        }

        if (outputA[i] == true && y == 450){

            fill(225,255,23)
        }

        if (outputA[i] == false && y == 450){

            fill(175)
        }
        rect(i * rectWidth, y, rectWidth, rectWidth)
    }
}

function updateBit(input, y, l){

    for(let i = 0; i < COLS + -l; i++){

        if (isMouseOverRect(i * rectWidth, y, rectWidth, rectWidth) && mouseClick == true){

            if(input[i] < 1){
                
                input[i] = true
                outputA[i] = false
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

function bitSubtraction(){


}

function bitAND(){

    for(let i = 0; i < COLS; i++){

        if(inputA[i] && inputB[i]){

            outputA[i] = true
        }
    }
}

function bitNAND(){

    for(let i = 0; i < COLS; i++){

        if(!(inputA[i] && inputB[i])){

            outputA[i] = true
        }
    }
}

function bitOR(){

    for(let i = 0; i < COLS; i++){

        if(inputA[i] || inputB[i]){

            outputA[i] = true
        }
    }
}

function bitNOR(){

    for(let i = 0; i < COLS; i++){

        if(!(inputA[i] || inputB[i])){

            outputA[i] = true
        }
    }
}

function bitXOR(){

    for(let i = 0; i < COLS; i++){

        if(!(inputA[i] && inputB[i])){

            if(inputA[i] || inputB[i]){

                outputA[i] = true
            }
        }
    }
}

function bitXNOR(){

    for(let i = 0; i < COLS; i++){

        if((inputA[i] && inputB[i]) || (!inputA[i] && !inputB[i])){        

            outputA[i] = true            
        }
    }
}

function bitImplies(){


}

function bitNImplies(){


}

function bitRightShift(){


}

function keyPressed(){

    for(let i = 0; i < COLS; i++){

    inputA[i] = false
    inputB[i] = false
    setting[i] = false
    }    
}