import { PUBLIC_KEY } from './key';

const BASE_URL = 'https://gateway.marvel.com/v1/public/';

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

    if (results.length) {
      const character = results[0];

      // Constructs new character obj with pre-formatted thumbnail property
      const characterWithThumbnail = {
        ...character,
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
      };
      return characterWithThumbnail;
    }

    return {
      error: 'No matches found'
    };
  } catch (err) {
    console.log(err);
  }
};

export const getComicsByCharacterId = async id => {
  if (!id) {
    return {
      error: 'No character ID provided'
    };
  }

  console.log('ID ', id);
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
    console.log(err);
  }
};
