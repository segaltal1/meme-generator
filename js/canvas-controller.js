'use strict'

var gCanvas;
var gCtx;
var gDrag = false;

function initCanvas() {
    document.querySelector('.input-text').value = ''
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')

    // addListeners()
    // resizeCanvas()
    // window.addEventListener('resize', resizeCanvas)

}



function drawImg() {
    var img = new Image()
    let meme = getMeme()
    let memeId = meme.selectedImgId
    let memeImg = getImgById(memeId)
    img.src = memeImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}

function onAddLine() {
    document.querySelector('.input-text').value = ''
    addLine()

}
function onWriteText(ev) {
    setNewLine(ev.value, 'txt');
    drawImg()
}
function onChangeSize(value) {
    let currLineIdx = getMeme().selectedLineIdx
    var diff = +value + getMeme().lines[currLineIdx]['size']
    setNewLine(diff, 'size')
    drawImg()
}
function onMoveUp() {
    var currLine = getCurrentLine()
    currLine['y'] -= 5
    drawImg()
}
function onMoveDown() {
    var currLine = getCurrentLine()
    currLine['y'] += 5
    drawImg()
}
function onDeleteLine() {
    deleteLine()
    drawImg()
}


function drawText() {
    const meme = getMeme();
    meme.lines.forEach((line) => {
        const myText = line.txt;
        let mySize = line.size;
        let myAlign = line.align;
        let myColor = line.color;
        let myColorLine = line.borderColor;
        let yPos = line.y;
        let xPos = line.x;
        let font = line.font;
        gCtx.lineWidth = 1;
        gCtx.strokeStyle = myColorLine;
        gCtx.fillStyle = myColor;
        gCtx.font = `${mySize}px ${font}`;
        gCtx.textAlign = myAlign;
        gCtx.fillText(myText, xPos, yPos);
        // setWidthTxt(line.id, gCtx.measureText(myText).width);
        gCtx.strokeText(myText, xPos, yPos);
    })
}



function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas

    gCanvas.width = elContainer.offsetWidth
    // gCanvas.width = elContainer.clientHeight 
    // Unless needed, better keep height fixed.
    // gCanvas.height = elContainer.offsetHeight
}