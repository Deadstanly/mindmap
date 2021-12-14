import{getData} from '../serviсes/getData.js';

function renderingKwork() {
   getData('https://mindmap-f5c39-default-rtdb.firebaseio.com/kworks.json').then(data => Object.values(data)).then(data => {
        data.forEach(item => {
           document.querySelector('.card_container').innerHTML +=
           `<div class="col-md-3 text-center mt-5">
                <div class="card">
                    <div class="card-header ">${item.cardName}</div>
                    <img src="${item.url}">
                    <hr>
                    <h5 class="card_title_price">${item.price} ${item.сurrency}</h5>
                    <hr>
                    <button class="btn-outline-success btn btn-block">Подробнее</button>
                    <button class="btn btn-success btn-block">Добавить в корзину</button>
                </div>
           </div>`;
        })
   })
}

export{renderingKwork}