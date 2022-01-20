function getItemsInCart() {
    let arrItems = JSON.parse(localStorage.getItem('cardObj'))
    console.log(arrItems)

    let cart = document.querySelector('.cart')


    arrItems.forEach(item => {
        cart.innerHTML +=
        `<div class="col-md-3 text-center mt-5">
            <div class="card">
            <div class="card-header ">${item.cardHeader}</div>
            <img class="card-img" src="${item.cardUrl}">
            <hr>
            <h5 class="card_title_price">${item.cardPrice}</h5>
            <hr>
            <button type="submit" class="btn btn-danger btn-block cart_delete">Удалить из корзины</button>
        </div>
   </div>`
    })
}

getItemsInCart();