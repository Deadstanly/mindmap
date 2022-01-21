function renderingFavoritesItem() {

    let arrItems = JSON.parse(localStorage.getItem('favoritesObj'));
    let favorites = document.querySelector('.favorites-panel');

    arrItems?.forEach(item => {
        favorites.innerHTML +=
        `<div class="col-md-3 text-center mt-5">
            <div class="card">
                <div class="card-header ">${item.cardHeader}</div>
                <img class="card-img" src="${item.cardUrl}">
                <hr>
                <h5 class="card_title_price">${item.cardPrice}</h5>
                <hr>
                <button type="submit" class="btn btn-danger btn-block favorites_delete">Удалить из избранного</button>
            </div>
        </div>`
    });
}

renderingFavoritesItem();