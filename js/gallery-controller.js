'use strict';
function onInit() {
    renderGallery()
}

function renderGallery() {
    let imgs = getImages()
    let strHtmls = imgs.map((img) => {
        return ` <img onclick="onSelectedMeme(this)" class="meme" 
        data-id=${img.id} src=${img.url} data-title= ${img.keywords}>`
    })

    document.querySelector('.gallery').innerHTML = strHtmls.join('')
}

function onSelectedMeme(element) {
    document.querySelector('.gallery').classList.add('display')
    document.querySelector('.editor').classList.remove('display')
    // var url 
    // drawImg(element.data);d
    initCanvas()
    let id = +element.getAttribute('data-id')
    // console.log(id);
    let meme = createMeme(id)
    setMeme(meme)
    drawImg()

}

function showGallery() {
    document.querySelector('.gallery').classList.remove('display')
    document.querySelector('.editor').classList.add('display')
}