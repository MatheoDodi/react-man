import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import errorImage from '../../assets/img/error-background.jpg';

const ErrorPage = ({ errors }) => (
  <Background>
    <div>
      <Card>
        <h2>Oops! Seems like something went wrong!</h2>
        <p>
          The following error{errors.length && 's'} occured: {errors.join(', ')}
        </p>
      </Card>
    </div>
  </Background>
);

export default ErrorPage;

ErrorPage.propTypes = {
  errors: PropTypes.array.isRequired
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${errorImage}') center center no-repeat;
  background-size: cover;
  > div {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 2rem 3rem;
  border-radius: 7px;
  background-color: white;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  ul {
    list-style: none;
  }
`;
