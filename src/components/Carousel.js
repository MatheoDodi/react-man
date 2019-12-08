import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ comics }) => {
  const [visibleComics, setVisibleComics] = useState(5);

  // computes how many slides should appear on the carousel depending on the window's width
  const calculateSlides = e => {
    const windowWidth = window.innerWidth;

    // if width is more than 1200 than always show 5
    if (windowWidth > 1200) {
      return;
    }

    // if the rounding down gives us a '0' then it short-circuits it to 1
    const slidesThatFit = Math.floor(parseInt(windowWidth / 280)) || 1;
    setVisibleComics(slidesThatFit);
  };

  useEffect(() => {
    calculateSlides();
    window.addEventListener('resize', calculateSlides);

    return () => {
      // cleanup when the components unmounts
      window.removeEventListener('resize');
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true
  };

  return (
    <ComicSection>
      <Slider {...settings} slidesToShow={visibleComics}>
        {comics.map(comic => (
          <Comic key={comic.id}>
            <Cover
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          </Comic>
        ))}
      </Slider>
    </ComicSection>
  );
};

export default Carousel;

const ComicSection = styled.div`
  padding: 4rem 0 2rem 0;
`;

const Comic = styled.div`
  margin: 0 auto;
`;

const Cover = styled.img`
  height: 340px;
  width: 225px;
`;
