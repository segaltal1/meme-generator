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
    document.querySelector('.gallery').classList.add('not-display')
    document.querySelector('.editor').classList.remove('not-display')
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
    document.querySelector('.gallery').classList.remove('not-display')
    document.querySelector('.editor').classList.add('not-display')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    if (document.body.classList.contains('menu-open')) {

        document.querySelector('.btn-menu-toggle').innerText = 'X'
    }
    else document.querySelector('.btn-menu-toggle').innerText = '☰'
}