const cardTemplate = document.querySelector('#card-template').content;

export function createCard(
    data,
    deleteHandler,
    likeHandler,
    zoomHandler
) {
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true),
        cardDeleteBtn = cardElement.querySelector('.card__delete-button'),
        cardLikeBtn = cardElement.querySelector(".card__like-button"),
        cardImage = cardElement.querySelector('.card__image');

    cardElement.querySelector('.card__title').textContent = data.name;
    Object.assign(cardImage, { src: data.link, alt: data.name });

    cardDeleteBtn.addEventListener("click", () => deleteHandler(cardElement));
    cardLikeBtn.addEventListener("click", (e) => likeHandler(cardLikeBtn));
    cardImage.addEventListener("click", () => zoomHandler(data));

    return cardElement;
}

export function deleteCard(card) {
    card.remove();
}

export function likeCard(btn) {
    btn.classList.toggle('card__like-button_is-active');
}
