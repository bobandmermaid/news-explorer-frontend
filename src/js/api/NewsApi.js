import { getDate } from "../utils/utils";

export default class NewsApi {
  constructor(config) {
    this.apiUrl = config.apiUrl;
    this.key = config.key;
    this.pageSize = config.pageSize;
    this.language = config.language;
    this.sortNews = config.sortNews;
  }

  getNewsApi = keyword => {
    let data = getDate();
    return fetch(
      `${this.apiUrl}${keyword}&from=${data.dateFrom}&to=${data.dateTo}&language=${this.language}&sortBy=${this.sortNews}&pageSize=${this.pageSize}&apiKey=${this.key}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }
}
