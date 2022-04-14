import React, { useEffect } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

import logo from 'assets/images/logo.svg'
import menu from 'assets/icons/menu.svg'
import MobileMenu from 'components/MobileMenu/MobileMenu';

import { routes } from 'config/routes'

const mobileWidth = '1000';

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Item = styled.a`
    color: white;
    margin-left: 22px;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.font.weight.semibold};

    @media (max-width: ${mobileWidth}px) {
        display: none;
    }
`;

const Icon = styled.img`
    cursor: pointer;
`;

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    const handleResize = () => {
        if (window.innerWidth < mobileWidth) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    window.addEventListener('resize', debounce(handleResize, 150));
    
    useEffect(() => {
        handleResize();
    } , []);

    return (
        <Wrapper>
            <div>
                <a href="./">
                    <img src={logo} />
                </a>
            </div>
            <div>
                {isMobile ? (
                    <>
                        <Icon onClick={() => setIsOpen(true)} src={menu} />
                        <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                    </>
                ):(
                    <div>
                        {routes.map(route => {
                            return <Item key={route.path} href={route.path}>{route.name}</Item>
                        })}
                    </div>
                )  
                }
            </div>
        </Wrapper>
    )
}

export default Navigation