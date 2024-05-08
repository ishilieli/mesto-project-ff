import {openModal} from "./modal";
import {popupDelete} from "./_variables";

const cardTemplate = document.querySelector('#card-template').content;

export let deletedId, deletedCard;

export function createCard(
    data,
    deleteHandler,
    checkLikedOnCard,
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
        cardDeleteBtn.addEventListener("click", function (e) {
            deletedId = data._id;
            deletedCard = e.target.closest('.card');
            openModal(popupDelete);
        });
    }

    cardLikeBtn.addEventListener("click", (e) => checkLikedOnCard(e,likeCount,data._id));
    cardImage.addEventListener("click", () => zoomHandler(data));
    likeCount.textContent = data.likes.length;

    return cardElement;
}

export function deleteCard(deletedCard) {
    deletedCard.remove();
}
