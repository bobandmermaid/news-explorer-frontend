// ApiKey = 62594941a81f47838b8aa3a719809e89

const API_URL = NODE_ENV === 'production'
  ? 'https://nomoreparties.co'
  : 'http://nomoreparties.co';

const obj = {
  baseUrl: `${API_URL}/cohort11`,
  headers: {
    authorization: '3d586cb3-b972-4364-9e4e-d3f459cab5c9',
    'Content-Type': 'application/json',
  },
};

export const config = JSON.stringify(obj);
