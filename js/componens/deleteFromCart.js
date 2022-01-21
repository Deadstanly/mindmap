function deleteFromCart(item) {
    let cardsArr = JSON.parse(localStorage.getItem('cardObj'))
    let cardsName = item.parentElement.querySelector('.card-header').textContent;
    let newCardsArr = cardsArr.filter(elem => elem.cardHeader != cardsName)

    localStorage.setItem('cardObj', JSON.stringify(newCardsArr))

    window.location.reload();

}

document.querySelectorAll('.cart_delete').forEach(item => {
    item.addEventListener('click', () => {
        deleteFromCart(item)
    })
})

