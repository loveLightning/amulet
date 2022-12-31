import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface MenuStyled {
  isOpen: boolean
  closeMenu: () => void
}

export const Menu = ({ isOpen, closeMenu }: MenuStyled) => {
  return (
    <>
      <StyledMenu isOpen={isOpen}>
        <MenuItems>
          <ItemLink onClick={closeMenu} href="/">
            Сила действия
          </ItemLink>
          <ItemLink onClick={closeMenu} href="/">
            Нумерология
          </ItemLink>
          <ItemLink onClick={closeMenu} href="/">
            Как работает
          </ItemLink>
          <ItemLink onClick={closeMenu} href="/">
            Оформить заказ
          </ItemLink>
        </MenuItems>
      </StyledMenu>
    </>
  )
}

interface Styled {
  isOpen: boolean
}

const StyledMenu = styled.div<Styled>`
  position: absolute;
  top: 90%;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  right: 0;
  background-color: white;
  width: 241px;
  border: 1px solid #e1a317;
  border-radius: 10px;
  z-index: 1001;
  transition: 0.4s ease all;
  padding: 20px;
`

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ItemLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 112.9%;
  color: #4b4b4b;
`
