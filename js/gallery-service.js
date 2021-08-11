'use strict';

let gKeywords = [];
let filteredImgs = [];

const gKeywordsMap = {
    'funny': 16,
    'politics': 16,
    'trump': 16,
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
    { id: 11, url: 'img/meme-imgs/11.jpg', keywords: ['boys'] },
    { id: 12, url: 'img/meme-imgs/12.jpg', keywords: ['tv'] },
    { id: 13, url: 'img/meme-imgs/13.jpg', keywords: ['suprise'] },
    { id: 14, url: 'img/meme-imgs/14.jpg', keywords: ['suprise'] },
    { id: 15, url: 'img/meme-imgs/15.jpg', keywords: ['suprise'] },
    { id: 16, url: 'img/meme-imgs/16.jpg', keywords: ['suprise', 'funny'] },
    { id: 17, url: 'img/meme-imgs/17.jpg', keywords: ['politics'] },
    { id: 18, url: 'img/meme-imgs/18.jpg', keywords: ['suprise'] }
];
makeKeywords();




function getImgsForDisplay() {
    if (gFilterBy === '') return gImgs;
    let imgs = gImgs.filter(function (img) {
        return (img.keywords.includes(gFilterBy))
    })
    return imgs;
}

function getImgById(imgId) {
    return gImgs.find(image => image.id === imgId);
}

function makeKeywords() {
    gImgs.forEach(img => {
        gKeywords.push(...img.keywords);
    })
}

function getImages() {
    return gImgs;
}