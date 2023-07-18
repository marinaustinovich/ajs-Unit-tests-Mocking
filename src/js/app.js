import fetchData from './http';

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  if (response.status === 'false') {
    return 'Информация об уровне временно недоступна';
  }
  return 'Неизвестный статус';
}
