
function addItemToCart() {


    document.querySelectorAll('.cart_add').forEach(element => {
        element.addEventListener('click', () => {

            let cardHeader = element.parentElement.querySelector('.card-header').textContent;
            let cardUrlImg = element.parentElement.querySelector('.card-img').src;
            let cardPrice = element.parentElement.querySelector('.card_title_price').textContent;

            let cardObj = {
                'cardHeader': cardHeader,
                'cardUrl': cardUrlImg,
                'cardPrice': cardPrice
            }

            let arrCards = [];

            if(localStorage.getItem('cardObj')) {
                arrCards = JSON.parse(localStorage.getItem('cardObj'))
            }

            arrCards.push(cardObj)

            localStorage.setItem('cardObj', JSON.stringify(arrCards))
        })
    })
}


export {addItemToCart}
