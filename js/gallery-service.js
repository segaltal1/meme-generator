'use strict';

let gKeywords = [];
let filteredImgs = [];

const gKeywordsMap = {
    'sleep': 35,
    'love': 20,
    'suprise': 31,
    'politics': 31
}

var gImgs = [
    { id: 1, url: 'img/meme-imgs/1.jpg', keywords: ['politics'] },
    { id: 2, url: 'img/meme-imgs/2.jpg', keywords: ['animals', 'love'] },
    { id: 3, url: 'img/meme-imgs/3.jpg', keywords: ['animals', 'sleep'] },
    { id: 4, url: 'img/meme-imgs/4.jpg', keywords: ['animals', 'sleep'] },
    { id: 5, url: 'img/meme-imgs/5.jpg', keywords: ['success', 'beby'] },
    { id: 6, url: 'img/meme-imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/meme-imgs/7.jpg', keywords: ['suprise', 'beby'] },
    { id: 8, url: 'img/meme-imgs/8.jpg', keywords: ['funny'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['eveil'] },
    { id: 10, url: 'img/meme-imgs/10.jpg', keywords: ['politics'] },
    { id: 11, url: 'img/meme-imgs/11.jpg', keywords: ['mens'] },
    { id: 12, url: 'img/meme-imgs/12.jpg', keywords: ['tvshow'] },
    { id: 13, url: 'img/meme-imgs/13.jpg', keywords: ['suprise'] },
    { id: 14, url: 'img/meme-imgs/14.jpg', keywords: ['suprise'] },
    { id: 15, url: 'img/meme-imgs/15.jpg', keywords: ['suprise'] },
    { id: 16, url: 'img/meme-imgs/16.jpg', keywords: ['suprise', 'funny'] },
    { id: 17, url: 'img/meme-imgs/17.jpg', keywords: ['politics'] },
    { id: 18, url: 'img/meme-imgs/18.jpg', keywords: ['suprise'] }
];
setKeyWords();


function getAllImages() {
    return strHtmls = gImgs.map((img) => {
        return ` <img onclick="onSelectedMeme(this)"  class="meme" 
        data-id=${img.id} src=${img.url} data-title= ${img.keywords}>`
    })

}
function setCommonKeyWords(keyword) {
    if( gKeywordsMap[keyword] > 60)return
    if (!gKeywordsMap[keyword]) {
        gKeywordsMap[keyword] = 16
        return
    }
    gKeywordsMap[keyword] += 5
}
function getKeyWordsFrequency(keyword) {
    return gKeywordsMap[keyword]
}

function getSavedMemes(memes) {
    var strHtmls = memes.map((meme) => {
        return `<img src=${meme}>`
    })
    return strHtmls.join('')
}
// function getImgsForDisplay() {
//     if (gFilterBy === '') return gImgs;
//     let imgs = gImgs.filter(function (img) {
//         return (img.keywords.includes(gFilterBy))
//     })
//     return imgs;
// }

function getImgById(imgId) {
    return gImgs.find(image => image.id === imgId);
}

function setKeyWords() {
    gImgs.forEach(img => {
        img.keywords.forEach(keyword => {
            if (!gKeywords.includes(keyword)) { gKeywords.push(keyword) }
        })

    })
}
function getSearchKeyWords() {
    return gKeywords.map(keyword => {
        return `<option value="${keyword}">`
    })
}

function getKeyWords() {
    return gKeywords.map(keyword => {
        var size = gKeywordsMap[keyword] ? gKeywordsMap[keyword] : 16
        return `<label onclick="onSearchImgs('${keyword}')"
         style="font-size:${size}px">${keyword}</label>`
    })
}

function getSearchImgs(searchKey) {
    return gImgs.filter(function (img) {
        return (img.keywords.includes(searchKey))
    })
}
function getImgsForDisplay(images) {
    return strHtmls = images.map((img) => {
        return ` <img onclick="onSelectedMeme(this)"  class="meme" 
        data-id=${img.id} src=${img.url} data-title= ${img.keywords}>`
    })
}

function getImages() {
    return gImgs;
}