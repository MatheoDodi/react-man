import React from "react";
import styled from "styled-components";
import genius from "../assets/icons/genius.png";
import engineer from "../assets/icons/engineer.png";
import businessman from "../assets/icons/businessman.png";
import tactician from "../assets/icons/tactician.png";

const Features = () => {
  return (
    <Container>
      <Feature>
        <Icon source={genius} />
        <Subheading>Super-Genius Intelligence</Subheading>
        <Details>
          Tony Stark is far more than a mechanical engineering prodigy who
          graduated from the Massachusetts Institute of Technology with honors
          at the age of 17.
        </Details>
      </Feature>
      <Feature>
        <Icon source={engineer} />
        <Subheading>Master Engineer</Subheading>
        <Details>
          He is an excellent engineer and mechanic capable of fixing almost any,
          if not all machinery.
        </Details>
      </Feature>
      <Feature>
        <Icon source={businessman} />
        <Subheading>Master Businessman</Subheading>
        <Details>
          Stark is extremely well-respected in the business world, able to
          command people's attentions when he speaks on economic matters. He has
          built up several multi-million dollar companies from virtually
          nothing.
        </Details>
      </Feature>
      <Feature>
        <Icon source={tactician} />
        <Subheading>Expert Tactician</Subheading>
        <Details>
          He is a brilliant tactician capable of quickly formulating battle
          strategies and new plans if the situation changes, like being able to
          elaborate complex plans in order to defeat different enemies.
        </Details>
      </Feature>
    </Container>
  );
};

export default Features;

const Container = styled.section`
  flex-basis: 60%;
  margin-left: 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5vw;
  grid-row-gap: 2rem;
  @media screen and (max-width: 1300px) {
    /* grid-column-gap: 5rem; */
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`;

const Feature = styled.div``;

const Icon = styled.i`
  display: block;
  background: ${props => `url(${props.source}) no-repeat`};
  background-size: contain;
  height: 50px;
`;

const Subheading = styled.h2`
  font-family: "Ropa Sans", sans-serif;
  font-weight: 400;
  margin: 0.45rem 0;
`;

const Details = styled.p`
  color: #52606d;
`;
