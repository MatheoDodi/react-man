import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/Logo.png';

const Navbar = () => {
  return (
    <Navigation>
      <Logo>
        <img src={logo} />
      </Logo>
      <List>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <button>Sign up</button>
        </li>
      </List>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem 5.5vw;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  width: 100vw;
  @media screen and (max-width: 600px) {
    padding-top: 1.5rem;
  }
`;

const Logo = styled.a`
  width: 50%;
  img {
    width: 400px;
    max-width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  margin: 0;
  list-style: none;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
  button {
    margin-left: 2rem;
    background: #f4bc00;
    color: #fff;
    padding: 10px 30px;
    border-radius: 3px;
    box-shadow: 3px 4px 9px rgba(360, 360, 360, 0.16);
    :hover {
      background: radial-gradient(#f4bc00 5%, #cc3332);
    }
    @media screen and (max-width: 600px) {
      padding: 5px 12px;
      margin-left: 0.7rem;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 0.85rem;
  }
`;
