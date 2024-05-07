export function openModal(modal) {
    modal.classList.add('popup_is-animated');
    setTimeout(() => { modal.classList.add("popup_is-opened");}, 0);
    modal.addEventListener('click', closeTargets);
    document.addEventListener('keydown', closeTargets);
}

export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    setTimeout(() => { modal.classList.remove("popup_is-animated");}, 700);
    modal.removeEventListener('click', closeTargets);
    document.removeEventListener('keydown', closeTargets);
}

export function modalLoading(isLoading, evt) {
    if (isLoading) {
        evt.submitter.textContent = "Сохранение...";
    } else {
        evt.submitter.textContent = "Сохранить";
    }
}

function closeTargets(evt) {
    if (evt.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
    if (evt.target === evt.currentTarget) {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}
