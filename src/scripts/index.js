import '../pages/index.css';
import {createCard, deleteCard, likeCard} from "./card";
import {closeModal, openModal} from "./modal";
import {initialCards} from "./dataCards";
import {
    cardContainer,
    formEditProfile, formNewPlace,
    nameInput, nameJob,
    popupCaption, popupCloseBtn,
    popupImage,
    popupTypeEdit, popupTypeImage, popupTypeNewCard,
    profileAddTarget, profileEditTarget
} from "./_variables";


function fillForm() {
    formEditProfile.name.value = nameInput.textContent;
    formEditProfile.description.value = nameJob.textContent;
}

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
    formEditProfile.reset();
}

function editCardSubmit(e) {
    e.preventDefault();
    const obj = {name: e.target.place.value, link: e.target.link.value},
        card = createCard(obj, deleteCard, likeCard, openModalImg);
    cardContainer.prepend(card);
    formNewPlace.reset();
    closeModal(popupTypeNewCard);
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
profileAddTarget.addEventListener("click", () => openModal(popupTypeNewCard));
profileEditTarget.addEventListener("click", function () {
    openModal(popupTypeEdit);
    fillForm();
});