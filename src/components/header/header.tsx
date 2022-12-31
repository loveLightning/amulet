import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { Menu } from 'src/components'
import { useOnClickOutside } from 'src/hooks'

import logo from '../../../public/images/logo.svg'

export const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const menuRef = useRef(null)

  const openMenu = () => {
    if (isOpen) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const closeMenu = () => {
    setOpen(false)
  }
  useOnClickOutside(menuRef, closeMenu)

  return (
    <Container style={{ position: 'relative' }}>
      <Wrapper>
        <Link href="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <Wrap ref={menuRef}>
          <StyledBurger onClick={openMenu} open={isOpen}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <Menu closeMenu={closeMenu} isOpen={isOpen} />
        </Wrap>
      </Wrapper>
    </Container>
  )
}

const Wrap = styled.div``

const Container = styled.div`
  padding: 0 30px;
`

const Wrapper = styled.div`
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled(Image)`
  cursor: pointer;
`

const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #737373;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
