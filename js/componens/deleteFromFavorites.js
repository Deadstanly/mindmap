function deleteFromFavorites(item) {

    let fovoritesArr = JSON.parse(localStorage.getItem('favoritesObj'));
    let favoritesName = item.parentElement.querySelector('.card-header').textContent;
    let newFavoritesArr = fovoritesArr.filter(elem => elem.cardHeader != favoritesName);

    localStorage.setItem('favoritesObj', JSON.stringify(newFavoritesArr));

    window.location.reload();
}

document.querySelectorAll('.favorites_delete').forEach(item => {
    item.addEventListener('click', () => {
        deleteFromFavorites(item);
    });
});