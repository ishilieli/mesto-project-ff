import '../pages/index.css';
import {createCard, deleteCard} from "./card";
import {closeModal, renderLoading, openModal} from "./modal";
import {
    cardContainer,
    formEditProfile, formNewPlace, formAvatar,
    popupTypeAvatar, userAvatar, validationConfig,
    nameInput, nameJob,
    popupCaption, popupCloseBtns,
    popupImage,
    popupTypeEdit, popupTypeImage, popupTypeNewCard,
    profileAddTarget, profileEditTarget, popupDelete, userConfig
} from "./_variables";

import {Validator} from "./validation";
import {Api} from "./api";

const formPlaceValidator = new Validator(validationConfig, formNewPlace),
    formCreateValidator = new Validator(validationConfig, formEditProfile),
    formAvatarValidator = new Validator(validationConfig, formAvatar);

const api = new Api(userConfig.baseUrl, userConfig.headers);

formPlaceValidator.enableValidation();
formCreateValidator.enableValidation();
formAvatarValidator.enableValidation();


function fillForm() {
    formEditProfile.name.value = nameInput.textContent;
    formEditProfile.description.value = nameJob.textContent;
}

function fillFormAjax(data) {
    nameInput.textContent = data.name;
    nameJob.textContent = data.about;
    userAvatar.style["background-image"] = `url("${data.avatar}")`;
    formEditProfile.name.value = data.name;
    formEditProfile.description.value = data.about;
}

Promise.all([api.getCardsData(), api.getUserData()])
    .then(([cards, userInfo]) => {
        userAvatar.style["background-image"] = `url("${userInfo.avatar}")`;
        fillFormAjax(userInfo);
        cards.forEach(card => renderCards(card, deleteCard, checkLikedOnCard, openModalImg, userInfo._id, confirmCallback));
    })
    .catch(err => console.log(err));

function editAvatarSumbit(e) {
    e.preventDefault();
    renderLoading(true, e);
    api.setAvatar(formAvatar.link.value)
        .then(r => {
            userAvatar.style["background-image"] = `url("${r.avatar}")`;
            closeModal(popupTypeAvatar);
            formAvatar.reset();
        })
        .catch(err => console.log(err))
        .finally(() => renderLoading(false, e));
}

function openModalImg(card) {
    openModal(popupTypeImage);
    Object.assign(popupImage, {src: card.link, alt: card.name});
    popupCaption.textContent = card.name;
}

let deletedId, deletedCard;
function confirmCallback(e,id) {
    deletedId = id;
    deletedCard = e.target.closest('.card');
    openModal(popupDelete);
}

function editFormSubmit(e) {
    e.preventDefault();
    const user = {name: formEditProfile.name.value, about: formEditProfile.description.value};
    renderLoading(true, e);
    api.editProfile(user.name, user.about)
        .then(res => {
            nameInput.textContent = res.name;
            nameJob.textContent = res.about;
            closeModal(popupTypeEdit);
        })
        .catch(err => console.log(err))
        .finally(() => renderLoading(false, e));
}

function editCardSubmit(e) {
    e.preventDefault();
    renderLoading(true, e)
    const obj = {name: e.target.place.value, link: e.target.link.value, likes: []};
    api.createUserCard(obj)
        .then(r => {
            cardContainer.prepend(createCard(r, deleteCard, checkLikedOnCard, openModalImg, r.owner._id, confirmCallback));
            closeModal(popupTypeNewCard);
            formNewPlace.reset();
        })
        .finally(() => renderLoading(false, e));
}

popupCloseBtns.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closeModal(popup));
});

function renderCards(card, deleteCard, checkLikedOnCard, openModalImg, userInfo, confirmCallback) {
    cardContainer.append(createCard(card, deleteCard, checkLikedOnCard, openModalImg, userInfo, confirmCallback))
}

function handleConfirmSubmit(e) {
    e.preventDefault();
    api.deleteUserCard(deletedId)
        .then(() => {
            closeModal(popupDelete);
            deleteCard(deletedCard);
        })
        .catch(err => console.log(err))
}

function checkLikedOnCard(btn, count, id) {
    let result = btn.target.classList.contains('card__like-button_is-active') ?
        api.toggleLike(id, 'DELETE') :
        api.toggleLike(id, 'PUT');
    result.then(res => {
        btn.target.classList.toggle('card__like-button_is-active');
        count.textContent = res.likes.length;
    })
        .catch(err => console.log(err))
}

formEditProfile.addEventListener('submit', editFormSubmit);
formNewPlace.addEventListener('submit', editCardSubmit);
formAvatar.addEventListener('submit', editAvatarSumbit);
popupDelete.addEventListener('submit', handleConfirmSubmit);

userAvatar.addEventListener("click", function (e) {
    openModal(popupTypeAvatar);
    formAvatarValidator.toggleButtonState();
});
profileAddTarget.addEventListener("click", function () {
    openModal(popupTypeNewCard);
    formPlaceValidator.toggleButtonState();
});
profileEditTarget.addEventListener("click", function () {
    openModal(popupTypeEdit);
    fillForm();
    formCreateValidator.resetValidity();
});