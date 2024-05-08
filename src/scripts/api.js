export class Api {
    constructor(link,headers) {
        this.link = link;
        this.headers = headers;
    }
    getResponseStatus = r => (r.ok ? r.json() : Promise.reject(`Ошибка: ${r.status}`));
    
    ///Можно сделать универсальную функцию запроса с проверкой ответа, чтобы не дублировать эту проверку в каждом запросе:
    request(url, options) {
        // принимает два аргумента: урл и объект опций, как и `fetch`
        return fetch(url, options).then(this.getResponseStatus)
    }
    setAvatar(link) {
        return this.request(`${this.link}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({avatar: link})
        });
    }

    getUserData() {
        return this.request(`${this.link}/users/me`, {
            headers: this.headers
        });
    }

    editProfile(name, about)  {
        return this.request(`${this.link}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about,
            })
        });
    }

    getCardsData() {
        return this.request(`${this.link}/cards`, {
            headers: this.headers
        });
    }

    createUserCard(data) {
        return this.request(`${this.link}/cards`, {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    deleteUserCard(id) {
        return this.request(`${this.link}/cards/${id}`, {
            headers: this.headers,
            method: 'DELETE',
        });
    }

    toggleLike(id,method) {
        return this.request(`${this.link}/cards/likes/${id}`, {
            method: `${method}`,
            headers: this.headers
        });
    }
}
