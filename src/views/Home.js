import React from 'react'
import styled from 'styled-components'
import { routes } from 'config/routes'
import HomeItem from 'components/HomeItem/HomeItem';

const Wrapper = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 35px;

  @media (min-width: 800px) {
    font-size: 45px;
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 40px;
  max-width: 500px;

  @media (min-width: 800px) {
    font-size: 15px;
    margin-bottom: 60px;
  }
`;

const Items = styled.div`
  display: block;
  
  @media (min-width: 1000px) {
    display: flex;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading>Witaj w Health!</Heading>
      <Paragraph>Health Center to aplikacja, która umożliwia Ci korzystanie z narzędzi obliczeniowych związanych ze zdrowiem w jednym miejscu! Wybierz jedną z aplikacji z listy poniżej.</Paragraph>
      
      <Items>
        { routes.map(route => {
            return (
              <HomeItem key={route.path} route={route} />
            )
          })}
      </Items>
    </Wrapper>
  )
}

export default Home