'use strict';
function onInit() {
    renderGallery()
    setSearchOptions()
    showKeyWords()
}

function renderGallery() {
    const imgs = getAllImages();
    document.querySelector('.gallery').innerHTML = imgs.join('')
}

function onSelectedMeme(element) {
    document.querySelector('.main-gallery').classList.add('not-display')
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
    document.querySelector('.main-gallery').classList.remove('not-display')
    document.querySelector('.editor').classList.add('not-display')
}

function onShowSavedMemes() {
    document.querySelector('.main-gallery').classList.remove('not-display')
    document.querySelector('.editor').classList.add('not-display')

    var memes = loadFromStorage(KEY_MEMES)
    if (!memes) {
        document.querySelector('.gallery').innerHTML = '<h1>No MEMES Yet </h1>'
        return
    }
    var imgs = getSavedMemes(memes);
    document.querySelector('.gallery').innerHTML = imgs
}
function onSearchImgs(keyword) {
    if (!keyword) {
        renderGallery()
        return
    }
    setCommonKeyWords(keyword)
    showKeyWords()
    var filteredImgs = getSearchImgs(keyword)
    var imgs = getImgsForDisplay(filteredImgs)
    document.querySelector('.gallery').innerHTML = imgs.join('')
}

function setSearchOptions() {
    var keywords = getSearchKeyWords()
    document.getElementById('search').innerHTML = keywords.join('')
}
function showKeyWords() {
    var numOfWords = 5
    var keywords = getKeyWords()
    keywords = keywords.splice(0, numOfWords)
    var htmls = keywords.join('') + `<label onclick="showAllkeyWords()">more..</label>`
    document.querySelector('.key-words').innerHTML = htmls
}
function showAllkeyWords() {
    var keywords = getKeyWords()
    var elWords = document.querySelector('.key-words')
    var elClose = `<label onclick="showKeyWords()"><i class="fas fa-arrows-alt-v"></i></label>`
    elWords.innerHTML = keywords.join('') + elClose
    elWords.classList.remove('not-display')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    if (document.body.classList.contains('menu-open')) {

        document.querySelector('.btn-menu-toggle').innerText = 'X'
    }
    else document.querySelector('.btn-menu-toggle').innerText = '☰'
}