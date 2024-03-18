// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


import {initialCards as arrayCards} from "./cards.js";

const container = document.querySelector('.content'),
    cardContainer = container.querySelector('.places__list'),
    cardTemplate = document.querySelector('#card-template').content,
    array = localStorage.getItem('card_key') ? JSON.parse(localStorage.getItem('card_key')) : arrayCards;

class Card {
    wrapper = cardContainer;
    static storage_array = [];
    constructor(template, content) {
        this.template = template;
        this.element = this.template.querySelector('.card').cloneNode(true);
        this.content = content;
    }

    createCard() {
        this.element.querySelector('.card__title').textContent = this.content.name;
        this.element.querySelector('.card__image').src = this.content.link;
        this.element.querySelector('.card__image').alt = 'это фотография ' + this.content.name;
        this.addListeners();
        console.log(this.wrapper)
        this.wrapper.append(this.element);

        Card.storage_array.push({
            name: `${this.element.querySelector('.card__title').textContent}`,
            link: `${this.element.querySelector('.card__image').src}`,
        });
    }

    addListeners() {
        this.element.querySelector('.card__delete-button').addEventListener('click', function () {
            this.closest('.card').remove();
        });
        this.element.querySelector('.card__like-button').addEventListener('click', function () {
            this.classList.toggle('is-active');
        });
    }
    static storageUpdate() {
        localStorage.setItem('card_key', JSON.stringify(Card.storage_array));
    }
}

array.forEach(function (item) {
    const exemplar = new Card(cardTemplate, item);
    exemplar.createCard();
});

Card.storageUpdate();
