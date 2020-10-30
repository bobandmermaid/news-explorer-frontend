// ApiKey = 62594941a81f47838b8aa3a719809e89

const NODE_ENV = process.env.NODE_ENV || 'development';

const API_URL = NODE_ENV === 'development'
  ? 'https://newsapi.org/v2/everything?q='
  : 'https://nomoreparties.co/news/v2/everything?q=';

const PROJECT_URL = NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://api.newsexplorer.ru';

export const config = {
  baseUrl: `${PROJECT_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const configApi = {
  key: '62594941a81f47838b8aa3a719809e89',
  pageSize: 100,
  language: 'ru',
  sortNews: 'publishedAt',
  apiUrl: `${API_URL}`,
};
