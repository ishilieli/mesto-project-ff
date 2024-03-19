// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(cardContent, deleteHandler) {
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true),
        cardDeleteBtn = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cardContent.name;
    cardElement.querySelector('.card__image').src = cardContent.link;
    cardElement.querySelector('.card__image').alt = 'это фотография ' + cardContent.name;

    cardDeleteBtn.addEventListener("click", (e) => deleteHandler(e));
    return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(e) {
    e.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу

function renderCards() {
    initialCards.forEach(cardContent =>
        cardContainer.append(createCard(cardContent, deleteCard))
    );
}

renderCards();