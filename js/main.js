const searchInput = document.querySelector('.input-search');
const restaurantCards = document.querySelectorAll('.card-restaurant');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        highlightInputError();
        showAllRestaurants();
        return;
    }

    filterRestaurants(query);
});

function highlightInputError() {
    searchInput.classList.add('error');

    setTimeout(() => {
        searchInput.classList.remove('error');
    }, 2000);
}

function showAllRestaurants() {
    restaurantCards.forEach(card => {
        card.style.display = '';
    });
}

function filterRestaurants(query) {
    restaurantCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const category = card.querySelector('.category').textContent.toLowerCase();

        if (title.includes(query) || category.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
