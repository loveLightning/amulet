import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import arrow from '../../../public/images/arrow-dropdown.svg'
import faqImage from '../../../public/images/shadow-faq.png'
import { Title } from '../styles'
import { dataDropdown, dropdownTypes } from './types'

export const Faq = () => {
  const [data, setData] = useState(dataDropdown)

  const changeDropdownValue = (item: dropdownTypes) => {
    setData((prev) => {
      const newState = prev.map((el) => {
        if (item.id === el.id) {
          return { ...el, active: !item.active }
        } else {
          return { ...el }
        }
      })

      return newState
    })
  }

  return (
    <Wrapper>
      <Content>
        <WrapTitle>
          <Title>Часто задаваемые вопросы</Title>
        </WrapTitle>
        <Dropdown>
          {data?.map((el) => (
            <Item key={el.id} onClick={() => changeDropdownValue(el)}>
              <WrapQuestion>
                <ItemQuestion>{el.question}</ItemQuestion>
                <WrapArrow active={el.active}>
                  <ArrowImage src={arrow} alt="arrow" />
                </WrapArrow>
              </WrapQuestion>
              <ItemAnswer active={el.active}>{el.answer}</ItemAnswer>
            </Item>
          ))}
        </Dropdown>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 60px 30px 90px;
  position: relative;
  background: #000000;
  background-image: url(${faqImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`

const Content = styled.div``
const WrapTitle = styled.div`
  max-width: 330px;
  margin: 0 auto;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`

interface ItemStyled {
  active: boolean
}
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(
    115.31deg,
    #424242 -31.18%,
    rgba(66, 66, 66, 0) 175.33%
  );
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
`

const ItemQuestion = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`
const ItemAnswer = styled.p<ItemStyled>`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  transition: 0.4s ease all;
  max-height: ${({ active }) => (!active ? 0 : '1000px')};
  height: ${({ active }) => active && 'auto'};
  overflow: hidden;
  opacity: ${({ active }) => (active ? '1' : '0')};
  padding: ${({ active }) => (active ? '0 20px 20px' : '0 20px')};
`
const WrapArrow = styled.div<ItemStyled>`
  transition: 0.4s ease all;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
`
const ArrowImage = styled(Image)``

const WrapQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 0;
`
