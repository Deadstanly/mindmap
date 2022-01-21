import {getData} from '../serviсes/getData.js';
import {addItemToCart} from '../componens/addToCart.js';
import {addToFavorites} from '../componens/addToFavorites.js';

function renderingKwork() {
   getData('https://mindmap-f5c39-default-rtdb.firebaseio.com/kworks.json').then(data => Object.values(data)).then(data => {
        data.forEach(item => {
           document.querySelector('.card_container').innerHTML +=
           `<div class="col-md-3 text-center mt-5">
                <div class="card">
                    <div class="card-header ">${item.cardName}</div>
                    <img class="card-img" src="${item.url}">
                    <hr>
                    <h5 class="card_title_price">${item.price}<span class="card_сurrency">${item.сurrency}</span></h5>
                    <hr>
                    <button class="btn-outline-success btn btn-block btn-inform">Подробнее</button>
                    <button class="btn btn-success btn-block cart_add">Добавить в корзину</button>
                    <button class="btn btn-block btn-outline-danger favorites_add">Добавить в избранное</button>
                </div>
           </div>`;
        })
   }).then(() => addItemToCart()).then(() => addToFavorites())
}

export{renderingKwork}