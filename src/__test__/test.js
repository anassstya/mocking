import fetchData from '../http';
import {getLevel} from '../index';
jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('with status ok', () => {
  fetchData.mockReturnValue({level: 200, status: 'ok'})

  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 200');
});

test('with error', () => {
  fetchData.mockReturnValue({level: 500, status: 'error'})

  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
