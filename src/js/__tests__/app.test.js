import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once and status false', () => {
  fetchData.mockReturnValue({ status: 'false', level: 10 });

  const response = getLevel(1);
  expect(response).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call getLevel once and status ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 10 });

  const response = getLevel(1);
  expect(response).toBe('Ваш текущий уровень: 10');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
