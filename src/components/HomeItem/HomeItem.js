import React from 'react'
import styled from 'styled-components'

const Item = styled.a`
  display: flex;
  padding: 30px;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 5px;
  width: 90vw;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  @media (min-width: 1000px) {
    width: 200px;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 10px;
   }

   :hover {
    background-color: ${props => props.theme.colors.secondary};
   }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  @media (min-width: 1000px) {
    width: 75px;
    height: 75px;
    margin-right: 0;
   }
`;

const Label = styled.p`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

const HomeItem = ({route}) => {
  return (
    <Item href={route.path}>
        <div>
            <Icon src={route.icon} />
        </div>
        <div>
            <Label>{route.name}</Label>
        </div>
    </Item>
  )
}

export default HomeItem