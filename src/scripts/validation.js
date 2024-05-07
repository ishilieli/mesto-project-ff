export class Validator {
    constructor(config, form) {
        this.formSelector = config.formSelector;
        this.inputSelector = config.inputSelector;
        this.submitButtonSelector = config.submitButtonSelector;
        this.btn = form.querySelector(this.submitButtonSelector);
        this.inactiveButtonClass = config.inactiveButtonClass;
        this.inputErrorClass = config.inputErrorClass;
        this.errorClass = config.errorClass;
        this.inputList = Array.from(form.querySelectorAll(this.inputSelector));
    }

    showInputError(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling;
        inputElement.classList.add(this.inputErrorClass);
        errorElement.classList.add(this.errorClass);
        errorElement.textContent = errorMessage;
    }

    hideInputError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    }

    checkInputValidity(inputElement) {
        const errorMessage = inputElement.validity.patternMismatch ? inputElement.dataset.errorMessage : inputElement.validationMessage;
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, errorMessage);
        } else {
            this.hideInputError(inputElement);
        }
    }

    setEventListeners() {
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState(inputElement);
            });
        });

    }

    toggleButtonState() {
        if (this.hasInvalidInput(this.inputList)) {
            this.btn.classList.add(this.inactiveButtonClass);
            this.btn.disabled = true;
        } else {
            this.btn.classList.remove(this.inactiveButtonClass);
            this.btn.disabled = false;
        }
    }

    enableValidation() {
        this.setEventListeners();
    }

    hasInvalidInput() {
        return this.inputList.some((input) => !input.validity.valid);
    }

    resetValidity() {
        this.inputList.forEach((input) => {
            this.hideInputError(input);
        });
    };

}