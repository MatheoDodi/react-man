import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/common/Navbar';
import Main from './components/Main';
import Carousel from './components/Carousel';
import { getCharacterByName, getComicsByCharacterId } from './API/API';
import Spinner from './components/common/Spinner';

const App = () => {
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const charResponse = await getCharacterByName('Iron Man');
      const comicsResponse = await getComicsByCharacterId(charResponse.id);
      if (charResponse.error || comicsResponse.error) {
        //! TODO:  handle error
      }

      setCharacter(charResponse);
      setComics(comicsResponse);
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <Hero description={character && character.description} />
      <Main thumbnail={character && character.thumbnail} />
      <Carousel comics={comics} />
    </>
  );
};

export default App;
