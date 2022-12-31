import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import logo from '../../../public/images/logo.svg'

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <WrapLogo>
          <Link href="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </WrapLogo>
        <WrapItems>
          <Item>
            <ItemLink href="/power">Сила действия</ItemLink>
            <AnotherItemLink href="/">Нумерология</AnotherItemLink>
          </Item>
          <Item>
            <ItemLink href="/about">О мастере</ItemLink>
            <ItemLink href="/order">Оформить заказ </ItemLink>
          </Item>
        </WrapItems>
      </Content>
      <AnotherContent>
        <Reference>
          <ReferenceItem href="/">Политика конфиденциальности</ReferenceItem>
          <ReferenceItem href="/">Политика возврата</ReferenceItem>
        </Reference>

        <Reference>
          <ReferenceItem href="/">О доставке </ReferenceItem>
          <ReferenceItem href="/">Организация</ReferenceItem>
        </Reference>
      </AnotherContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  padding: 32px 15px;
`
const WrapLogo = styled.div`
  text-align: center;
  margin-bottom: 15px;
`
const Logo = styled(Image)`
  cursor: pointer;
`

const Content = styled.div`
  max-width: 311px;
  margin: 0 auto;
`
const AnotherContent = styled.div`
  max-width: 330px;
  margin: 0 auto;
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 311px;
  }
`

const WrapItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 155%;
  color: black;
`

const AnotherItemLink = styled(ItemLink)`
  color: #f1b225;
`

const Reference = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`
const ReferenceItem = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #a3a3a3;
`
