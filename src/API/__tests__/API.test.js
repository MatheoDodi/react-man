import { getCharacterByName, getComicsByCharacterId } from '../API';
import {
  fetchEmptyResults,
  fetchAPIError,
  fetchValidResults
} from '../__mocks__/mockFetch';

describe('getCharacterByName should return the appropriate responses', () => {
  test('getCharacterByName should handle no name being passed', async () => {
    const response = await getCharacterByName();

    const error = {
      error: 'No character provided'
    };

    expect(response).toEqual(error);
  });

  test('getCharacterByName should handle empty results', async () => {
    const response = await getCharacterByName('Testing', fetchEmptyResults);

    const error = {
      error: 'No matches found'
    };

    expect(response).toEqual(error);
  });

  test('getCharacterByName should handle error from API', async () => {
    const response = await getCharacterByName('Testing', fetchAPIError);

    const error = {
      error:
        'There was an error trying to connect to the API. Please try again later'
    };

    expect(response).toEqual(error);
  });

  test('getCharacterByName should return valid results', async () => {
    const response = await getCharacterByName('Iron Man', fetchValidResults);

    const validResponse = {
      name: 'Iron Man'
    };

    expect(response).toMatchObject(validResponse);
  });
});

describe('getComicsByCharacterId should return the appropriate responses', () => {
  test('getComicsByCharacterId should handle no ID being passed', async () => {
    const response = await getComicsByCharacterId();

    const error = {
      error: 'No character ID provided'
    };

    expect(response).toEqual(error);
  });

  test('getComicsByCharacterId should handle empty results', async () => {
    const response = await getComicsByCharacterId(1111, fetchEmptyResults);

    const error = {
      error: 'No matches found'
    };

    expect(response).toEqual(error);
  });

  test('getComicsByCharacterId should handle error from API', async () => {
    const response = await getComicsByCharacterId(1111, fetchAPIError);

    const error = {
      error:
        'There was an error trying to connect to the API. Please try again later'
    };

    expect(response).toEqual(error);
  });

  test('getComicsByCharacterId should return valid results', async () => {
    const response = await getComicsByCharacterId(1111, fetchValidResults);

    const validResponse = [
      {
        name: 'Iron Man'
      }
    ];

    expect(response).not.toHaveLength(0);
    expect(response).toMatchObject(validResponse);
  });
});
