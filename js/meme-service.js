'use strict'

var gMeme;
var gLineId = 0;

function createMeme(id) {
    gLineId = 0;
    let firstLine = createLine(5, 80);
    return {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [firstLine]

    }
}

function setNewLine(value, type) {
    //get the currect line we editing
    let currLineIdx = gMeme.selectedLineIdx
    gMeme.lines[currLineIdx][type] = value
    // addLine(value)
}
function addLine(txt) {
    gLineId++;
    gMeme.selectedLineIdx = gMeme.lines.length;
    var startY
    if (gMeme.lines.length === 0) startY = 80;
    else if (gMeme.lines.length === 1) startY = 420;
    else if (gMeme.lines.length > 1) startY = 175;
    let line = createLine(10, startY, txt)
    gMeme.lines.push(line)
}


function createLine(x, y, txt = 'Write Here!', size = 40, align = '', font = 'Atma-medium', color = 'white', borderColor = 'black') {
    return {
        id: gLineId,
        txt,
        size,
        align,
        color,
        borderColor,
        font,
        x,
        y,
    }
}
function getCurrentLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}
function setMeme(meme) {
    gMeme = meme;
}

function deleteLine() {
    if (gMeme.selectedLineIdx) {
        gMeme.lines.splice(gMeme.selectedLineIdx, 1);
        document.querySelector('.input-text').value = '';
        gMeme.selectedLineIdx = 0;
    }
}
function getMeme() {
    return gMeme;
}