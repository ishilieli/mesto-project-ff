export const cardContainer = document.querySelector('.places__list'),
    profileAddTarget = document.querySelector('.profile__add-button'),
    profileEditTarget = document.querySelector('.profile__edit-button'),
    nameInput = document.querySelector(".profile__title"),
    nameJob = document.querySelector(".profile__description"),
    userAvatar = document.querySelector(".profile__image"),
    popupImage = document.querySelector('.popup__image'),
    popupCaption = document.querySelector('.popup__caption'),
    popupTypeImage = document.querySelector(".popup_type_image"),
    popupTypeEdit = document.querySelector(".popup_type_edit"),
    popupTypeAvatar = document.querySelector(".popup_type_edit-avatar"),
    popupTypeNewCard = document.querySelector(".popup_type_new-card"),
    popupCloseBtn = document.querySelectorAll('.popup__close'),
    formEditProfile = document.forms.edit_profile,
    formNewPlace = document.forms.new_place,
    formAvatar = document.forms.avatar,
    popupDelete = document.querySelector('.popup_type_delete-card')
;

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible',
};

export const userConfig = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-12",
    headers: {
        authorization: "4165abdf-9d84-4bb7-8232-d514d6fbef88",
        "Content-Type": "application/json",
    },
};