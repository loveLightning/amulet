import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Title } from 'src/components'

import imgCandles from '../../../public/images/candles.png'

export const Candles = () => {
  return (
    <Wrapper>
      <WrapReactangle>
        <TextRectangle>
          К каждой свече идет мощный ритуал от Ирэны, который может провести
          даже неподготовленный человек!
        </TextRectangle>
      </WrapReactangle>
      <WrapTitle>
        <Title>
          Все свечи заряжаются индивидуально под ваше пространство — это
          привлечет удачу в Новом году
        </Title>
      </WrapTitle>
      <WrapDesc>
        <Desc>
          После того, как свечи отлиты и в них добавлены мощные ингредиенты
          (пигмент и травы), Ирэна проводит обряд магического нумерологического
          заряда. <br />
          <br />
          Для этого на консультации помощница спросит ваши{' '}
          <Span>дату рождения, номер дома и номер квартиры,</Span> где вы
          планируете работать со свечой. <br />
          <br />
          По этим данным Ирэна рассчитает нумерологическую Матрицу Дома — ваше
          уникальное число, которым кодируется каждая свеча. Затем Ирэна
          заряжает свечи особым ритуалом. В результате они становятся мостиком
          между вами и Высшими силами, помогая привлечь в ваш дом желаемое.
        </Desc>
      </WrapDesc>
      <ImageCandles src={imgCandles} alt="candles" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.layout};
  position: relative;
  padding: 46px 15px 0;
  position: relative;

  height: 1083px;
`
const WrapReactangle = styled.div`
  max-width: 330px;
  background: linear-gradient(
    180deg,
    #424242 -20.97%,
    rgba(66, 66, 66, 0) 200%
  );
  border-radius: 10px;
  padding: 20px 25px;
  margin: 0 auto 37px;
  z-index: 1;
  position: relative;
`

const TextRectangle = styled.p`
  font-family: 'Muller sans-serif';
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 129%;
  text-align: center;
  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`

const WrapDesc = styled.div`
  max-width: 300px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`
const Desc = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
`

const WrapTitle = styled.div`
  max-width: 313px;
  margin: 0 auto 25px;
  z-index: 1;
  position: relative;
`

const Span = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.light_green};
`

const ImageCandles = styled(Image)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  left: 0;
  right: 0;
`
