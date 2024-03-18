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

    constructor(template, content, id) {
        this.id = id;
        this.template = template;
        this.element = this.template.querySelector('.card').cloneNode(true);
        this.content = content;
    }

    createCard() {
        this.element.dataset.id = `${this.id}`;
        this.element.querySelector('.card__title').textContent = this.content.name;
        this.element.querySelector('.card__image').src = this.content.link;
        this.element.querySelector('.card__image').alt = 'это фотография ' + this.content.name;
        this.wrapper.append(this.element);
        this.addListeners();

        Card.storage_array.push({
            name: `${this.element.querySelector('.card__title').textContent}`,
            link: `${this.element.querySelector('.card__image').src}`,
        });
    }

    addListeners() {
        this.element.querySelector('.card__delete-button').addEventListener('click', function () {
            Card.storage_array.splice(parseInt(this.closest('.card').dataset.id), 1);
            Card.storageUpdate();
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

array.forEach(function (item, id) {
    const exemplar = new Card(cardTemplate, item, id);
    exemplar.createCard();
});

Card.storageUpdate();

////localStorage.clear() for reset