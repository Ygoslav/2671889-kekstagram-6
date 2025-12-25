const SERVER_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const loadData = () =>
  fetch(`${SERVER_URL}/data`).then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось получить данные с сервера');
    }
    return response.json();
  });

export { loadData };
