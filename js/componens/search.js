import {getData} from '../serviсes/getData.js'

function getDataForSearch() {
    let inp = document.querySelector('.search_panel').value;
    getData('https://mindmap-f5c39-default-rtdb.firebaseio.com/kworks.json').then(data => Object.values(data)).then(data => search(inp, data))
}

function search(str, arr) {
    let resultSearchArr = arr.filter(item => item.cardName.indexOf(str) >= 0);

    resultSearchArr.forEach(element => {
        document.querySelector('.card_search').innerHTML =
        `<div class="card">
            <div class="card-header ">${element.cardName}</div>
            <img src="${element.url}">
            <hr>
            <h5 class="card_title_price">${element.price} ${element.сurrency}</h5>
            <hr>
            <button class="btn-outline-success btn btn-block">Подробнее</button>
            <button class="btn btn-success btn-block">Добавить в корзину</button>
        </div>`
    })
}

document.querySelector('.btn_search').addEventListener('click', () => {
    getDataForSearch();
})



export{getDataForSearch}