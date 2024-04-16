import '../pages/index.css';
import {createCard, deleteCard, likeCard} from "./card";
import {closeModal, openModal} from "./modal";
import {initialCards} from "./dataCards";

const $ = document.querySelector.bind(document);

const cardContainer = $('.places__list'),
    profileAddTarget = $('.profile__add-button'),
    profileEditTarget = $('.profile__edit-button'),
    nameInput = $(".profile__title"),
    nameJob = $(".profile__description"),
    popupImage = $('.popup__image'),
    popupCaption = $('.popup__caption'),
    popupTypeImage = $(".popup_type_image"),
    popupTypeEdit = $(".popup_type_edit"),
    popupTypeNewCard = $(".popup_type_new-card"),
    popupCloseBtn = document.querySelectorAll('.popup__close'),
    formEditProfile = document.forms.edit_profile,
    formNewPlace = document.forms.new_place
;

function openModalImg(card) {
    openModal(popupTypeImage);
    Object.assign(popupImage, {src: card.link, alt: card.name});
    popupCaption.textContent = card.name;
}

function editFormSubmit(e) {
    e.preventDefault();
    nameInput.textContent = formEditProfile.name.value;
    nameJob.textContent = formEditProfile.description.value;
    closeModal(popupTypeEdit);
}

function editCardSubmit(e) {
    e.preventDefault();
    const obj = {name: e.target.place.value, link: e.target.link.value},
        card = createCard(obj, deleteCard, likeCard, openModalImg);
    cardContainer.prepend(card);
    formNewPlace.reset();
    closeModal(popupTypeNewCard);
    setTimeout(function (){
        card.querySelector('img').offsetHeight < 50 ? card.querySelector('img').style.display = 'block' : '';
    },200);
}

popupCloseBtn.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closeModal(popup));
});

function renderCards() {
    initialCards.forEach(cardContent =>
        cardContainer.append(createCard(cardContent, deleteCard, likeCard, openModalImg))
    );
}


renderCards();
formEditProfile.addEventListener('submit', editFormSubmit);
formNewPlace.addEventListener('submit', editCardSubmit);
profileEditTarget.addEventListener("click", () => openModal(popupTypeEdit));
profileAddTarget.addEventListener("click", () => openModal(popupTypeNewCard));