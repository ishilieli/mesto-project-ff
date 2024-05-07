import {openModal, closeModal} from "./modal";
import {deleteUserCard, toggleLike} from "./api";
import {popupDelete} from "./_variables";

const cardTemplate = document.querySelector('#card-template').content;

export function createCard(
    data,
    deleteHandler,
    likeHandler,
    zoomHandler,
    userId
) {
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true),
        cardDeleteBtn = cardElement.querySelector('.card__delete-button'),
        cardLikeBtn = cardElement.querySelector(".card__like-button"),
        cardImage = cardElement.querySelector('.card__image'),
        likeCount = cardElement.querySelector('.like-count');

    cardElement.id = data._id;
    cardElement.querySelector('.card__title').textContent = data.name;
    Object.assign(cardImage, {src: data.link, alt: data.name});

    data.likes.forEach(like => {
        if (like._id === userId) {
            cardLikeBtn.classList.add('card__like-button_is-active');
        }
    });

    if (userId !== data.owner._id) {
        cardDeleteBtn.style.display = 'none';
    } else {
        cardDeleteBtn.addEventListener("click", function () {
            openModal(popupDelete);
            popupDelete.dataset.cardId = data._id;
            popupDelete.addEventListener('submit', (e) => {
                e.preventDefault();
                deleteCard(cardElement, popupDelete);
            })
        });
    }

    cardLikeBtn.addEventListener("click", (e) => likeHandler(cardElement,e));
    cardImage.addEventListener("click", () => zoomHandler(data));
    likeCount.textContent = data.likes.length;

    return cardElement;
}


export function deleteCard(card, modal) {
    card.remove();
    deleteUserCard(card.id)
        .then(() => {closeModal(modal); card.remove();})
        .catch(err => console.log(err))
}

export function likeCard(card, e) {
    e.target.classList.toggle('card__like-button_is-active');
    let result = e.target.classList.contains('card__like-button_is-active') ?
        toggleLike(card.id, 'PUT') :
        toggleLike(card.id, 'DELETE');
    result.then(res => {
        card.querySelector('.like-count').textContent = res.likes.length;
    })
        .catch(err => console.log(err))
}
