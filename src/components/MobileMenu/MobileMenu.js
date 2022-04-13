import React from 'react'
import styled from 'styled-components'

import { routes } from 'config/routes';
import revkulogo from 'assets/images/revku-logo.svg'
import closeicon from 'assets/icons/close.svg'
import './mobilemenu.css'

const Wrapper = styled.div`
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px;
    transition: right 0.3s ease-in-out;
`;

const Header = styled.div`
    text-align: right;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Item = styled.a`
    color: white;
    margin: 15px 0;
    text-decoration: none;
    font-size: 19px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Icon = styled.img`
    cursor: pointer;
`;

const Footer = styled.div`
    text-align: right;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
`;
const Logo = styled.img`
    margin-left: 10px;
    transform: translateY(5px);
`;

const MobileMenu = ({isOpen, setIsOpen}) => {
    return (
        <Wrapper className={isOpen ? 'menuopen' : 'menuclosed'}>
          <Header>
              <Icon onClick={() => setIsOpen(false)} src={closeicon} />
          </Header>
          <Content>
              {
                  routes.map(route => {
                      return <Item key={route.path} href={route.path}>{route.name}</Item>
                  })
              }
          </Content>
          <Footer>
              Powered by <Logo src={revkulogo} />
          </Footer>
      </Wrapper>
    )
}

export default MobileMenu