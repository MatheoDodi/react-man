import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/common/Navbar';
import Main from './components/Main';
import Carousel from './components/Carousel';
import { getCharacterByName, getComicsByCharacterId } from './API/API';
import Spinner from './components/common/Spinner';
import { checkResponsesForErrors } from './utils/helpers';
import ErrorPage from './components/common/ErrorPage';

const App = () => {
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    (async () => {
      const charResponse = await getCharacterByName('Iron Man');
      const comicsResponse = await getComicsByCharacterId(charResponse.id);

      const totalErrors = checkResponsesForErrors(charResponse, comicsResponse);

      if (totalErrors.length) {
        setErrors(totalErrors);
        return;
      }

      setCharacter(charResponse);
      setComics(comicsResponse);
      setLoading(false);
    })();
  }, []);

  if (errors.length) {
    return <ErrorPage errors={errors} />;
  }

  return false ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <Hero description={character && character.description} />
      <Main
        thumbnail={
          character &&
          `${character.thumbnail.path}.${character.thumbnail.extension}`
        }
        name={character && character.name}
      />
      <Carousel comics={comics} />
    </>
  );
};

export default App;
