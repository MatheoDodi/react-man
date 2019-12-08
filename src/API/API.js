import { PUBLIC_KEY } from './key';

const BASE_URL = 'https://gateway.marvel.com/v1/public/';

const apiError = {
  error:
    'There was an error trying to connect to the API. Please try again later'
};

export const getCharacterByName = async characterName => {
  if (!characterName) {
    return {
      error: 'No character provided'
    };
  }

  try {
    // if name given is more than one word, replaces spaces with URL query supported format
    const nameQuery = characterName.replace(' ', '%20');
    const response = await fetch(
      `${BASE_URL}characters?name=${nameQuery}&apikey=${PUBLIC_KEY}`
    );
    const {
      data: { results }
    } = await response.json();

    if (results.length > 0) {
      const character = results[0];
      return character;
    }

    return {
      error: 'No matches found'
    };
  } catch (err) {
    return apiError;
  }
};

export const getComicsByCharacterId = async id => {
  if (!id) {
    return {
      error: 'No character ID provided'
    };
  }

  try {
    // if name given is more than one word, replaces spaces with URL query supported format
    const response = await fetch(
      `${BASE_URL}characters/${id}/comics?apikey=${PUBLIC_KEY}`
    );

    const {
      data: { results }
    } = await response.json();

    if (results.length) {
      return results;
    }

    return {
      error: 'No matches found'
    };
  } catch (err) {
    return apiError;
  }
};
