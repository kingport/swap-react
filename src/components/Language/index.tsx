import React, { useRef } from 'react'
import { darken } from 'polished'
import { Chrome, Home } from 'react-feather'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'

import i18next from 'i18next'

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  color:#212429;
  font-size: 0.7rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => darken(0.05, theme.bg3)};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 5.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`

const MenuItem = styled.div`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text1};
  :hover {
    color: ${({ theme }) => theme.primaryText1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`
function switchCnLanuage() {
  i18next.changeLanguage('zh')
}

function switchEnLanuage() {
  i18next.changeLanguage('en')
}

export default function Language() {
    const node = useRef<HTMLDivElement>()
    const [open, toggle] = useToggle(false)
    useOnClickOutside(node, open ? toggle : undefined)

    return (
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
        <StyledMenu ref={node as any}>
            <StyledMenuButton onClick={toggle}>
              Language
            </StyledMenuButton>
            {open && (
                <MenuFlyout>
                    <MenuItem onClick={switchCnLanuage}>
                        <Chrome size={14} />
                        CN
                    </MenuItem>
                    <MenuItem onClick={switchEnLanuage}>
                        <Home size={14} />
                        EN
                    </MenuItem>
                </MenuFlyout>
            )}
        </StyledMenu>
    )
}
