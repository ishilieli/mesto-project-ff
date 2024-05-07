import {userConfig as user} from "./_variables";

const getResponseStatus = r => (r.ok ? r.json() : Promise.reject(`Ошибка: ${r.status}`));

export function setAvatar(link) {
    return fetch(`${user.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: user.headers,
        body: JSON.stringify({avatar: link})
    }).then(r => getResponseStatus(r));
}

export function getUserData() {
    return fetch(`${user.baseUrl}/users/me`, {
        headers: user.headers
    }).then(r => getResponseStatus(r));
}

export function editProfile(name, about)  {
    return fetch(`${user.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: user.headers,
        body: JSON.stringify({
            name: name,
            about: about,
        })
    }).then(r => getResponseStatus(r));
}

export function getCardsData() {
    return fetch(`${user.baseUrl}/cards`, {
        headers: user.headers
    }).then(r => getResponseStatus(r));
}

export function createUserCard(data) {
    return fetch(`${user.baseUrl}/cards`, {
        headers: user.headers,
        method: 'POST',
        body: JSON.stringify(data)
    }).then(r => getResponseStatus(r));
}

export function deleteUserCard(id) {
    return fetch(`${user.baseUrl}/cards/${id}`, {
        headers: user.headers,
        method: 'DELETE',
    }).then(r => getResponseStatus(r));
}

export function toggleLike(id,method) {
    return fetch(`${user.baseUrl}/cards/likes/${id}`, {
        method: `${method}`,
        headers: user.headers
    }).then(r => getResponseStatus(r));
}