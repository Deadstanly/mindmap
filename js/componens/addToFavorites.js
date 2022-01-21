function addToFavorites() {

    document.querySelectorAll('.favorites_add').forEach(element => {
        element.addEventListener('click', () => {

            let cardHeader = element.parentElement.querySelector('.card-header').textContent;
            let cardUrlImg = element.parentElement.querySelector('.card-img').src;
            let cardPrice = element.parentElement.querySelector('.card_title_price').textContent;
            let cardCurrency = element.parentElement.querySelector('.card_сurrency').textContent;

            let favoritesObj = {
                'cardHeader': cardHeader,
                'cardUrl': cardUrlImg,
                'cardPrice': cardPrice,
                'cardсurrency': cardCurrency
            }

            let arrFavorites = [];

            if(localStorage.getItem('favoritesObj')) {
                arrFavorites = JSON.parse(localStorage.getItem('favoritesObj'));
            }

            arrFavorites.push(favoritesObj);

            localStorage.setItem('favoritesObj', JSON.stringify(arrFavorites));

            alert('Добавлено в избранное !');
        });
    });
};

export {addToFavorites};