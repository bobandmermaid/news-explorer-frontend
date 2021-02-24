export default class MainApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  signup = async (email, password, name) => {
    try {
      const res = await fetch(`${this.baseUrl}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: this.headers,
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      if (res.ok) {
        return res.json();
      }
      const json = res.json();
      return await json.then(Promise.reject.bind(Promise));
    } catch (err) {
      throw err;
    }
  }

  signin = async (email, password) => {
    try {
      const res = await fetch(`${this.baseUrl}/signin`, {
        method: 'POST',
        headers: this.headers,
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        return res.json();
      }
      const json = res.json();
      return await json.then(Promise.reject.bind(Promise));
    } catch (err) {
      throw err;
    }
  }

  getUserData = async () => {
    try {
      const res = await fetch(`${this.baseUrl}/users/me`, {
        method: 'GET',
        headers: this.headers,
        credentials: 'include',
      });
      return this._getResponseData(res);
    } catch (err) {
      throw err;
    }
  }

  logout = async () => {
    const res = await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
    });
    return this._getResponseData(res);
  }

  getArticles = () => {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));
  }

  createArticle = obj => {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        keyword: obj.keyword,
        title: obj.title,
        text: obj.text,
        date: obj.date,
        source: obj.source,
        link: obj.link,
        image: obj.image,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  removeArticle = articleId => {
    return fetch(`${this.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));
  }

  _getResponseData = res => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}
