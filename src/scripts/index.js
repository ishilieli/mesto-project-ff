import '../pages/index.css';
import {createCard, deleteCard, likeCard} from "./card";
import {closeModal, modalLoading, openModal} from "./modal";
import {
    cardContainer,
    formEditProfile, formNewPlace, formAvatar,
    popupTypeAvatar, userAvatar, validationConfig,
    nameInput, nameJob,
    popupCaption, popupCloseBtn,
    popupImage,
    popupTypeEdit, popupTypeImage, popupTypeNewCard,
    profileAddTarget, profileEditTarget, popupDelete
} from "./_variables";

import {Validator} from "./validation";
import {createUserCard, deleteUserCard, editProfile, getCardsData, getUserData, setAvatar} from "./api";

const formPlaceValidator = new Validator(validationConfig, formNewPlace),
    formCreateValidator = new Validator(validationConfig, formEditProfile),
    formAvatarValidator = new Validator(validationConfig, formAvatar);

let USER_ID = null;

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

Promise.all([getCardsData(), getUserData()])
    .then(([cards, userInfo]) => {
        userAvatar.style["background-image"] = `url("${userInfo.avatar}")`;
        fillFormAjax(userInfo);
        USER_ID = userInfo._id;
        cards.forEach(card => renderCards(card, deleteCard, likeCard, openModalImg, USER_ID));
    })
    .catch(err => console.log(err));

function editAvatarSumbit(e) {
    e.preventDefault();
    modalLoading(true, e);
    setAvatar(formAvatar.link.value)
        .then(r => userAvatar.style["background-image"] = `url("${r.avatar}")`)
        .catch(err => console.log(err))
        .finally(() => {
            modalLoading(false, e);
            closeModal(popupTypeAvatar);
            formAvatar.reset();
        });
}

function openModalImg(card) {
    openModal(popupTypeImage);
    Object.assign(popupImage, {src: card.link, alt: card.name});
    popupCaption.textContent = card.name;
}

function editFormSubmit(e) {
    e.preventDefault();
    const user = {name: formEditProfile.name.value, about: formEditProfile.description.value};
    modalLoading(true, e);
    editProfile(user.name, user.about)
        .then(res => {
            nameInput.textContent = res.name;
            nameJob.textContent = res.about;
        })
        .catch(err => console.log(err))
        .finally(() => {
            modalLoading(false, e);
            closeModal(popupTypeEdit);
        });
}

function editCardSubmit(e) {
    e.preventDefault();
    modalLoading(true, e)
    const obj = {name: e.target.place.value, link: e.target.link.value, likes: []};
    createUserCard(obj)
        .then(r => cardContainer.prepend(createCard(r, deleteCard, likeCard, openModalImg, r.owner._id)))
        .finally(() => {
            modalLoading(false, e);
            closeModal(popupTypeNewCard);
            formNewPlace.reset();
        });
}

popupCloseBtn.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closeModal(popup));
});

function renderCards(card, deleteCard, likeCard, openModalImg, userInfo) {
    cardContainer.append(createCard(card, deleteCard, likeCard, openModalImg, userInfo))
}

formEditProfile.addEventListener('submit', editFormSubmit);
formNewPlace.addEventListener('submit', editCardSubmit);
formAvatar.addEventListener('submit', editAvatarSumbit);

userAvatar.addEventListener("click", function (e) {
    openModal(popupTypeAvatar);
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