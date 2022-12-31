import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Button, MyModal, Title } from 'src/components'

import amuletImage from '../../../public/images/amulet.png'
import ashImage from '../../../public/images/amulet-ash.png'
import ellipseImage from '../../../public/images/ellipse.png'
import { TestimonialsForm } from '../testimonials'

export const Amulet = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Wrapper>
      <WrapContent>
        <WrapTitle>
          <Title>
            Свечи прекрасно сочетаются с другими предметами Силы, созданными
            Ирэной
          </Title>
        </WrapTitle>
        <WrapLine>
          <Line />
        </WrapLine>
        <WrapDesc>
          <Desc>
            Амулеты Ирэны Ивановой действуют{' '}
            <Span>
              на энергетику самого владельца и только во время ношения,
            </Span>{' '}
            привлекая любовь, деньги и защиту.
          </Desc>
        </WrapDesc>

        <WrapDesc>
          <Desc>
            Свечи работают <Span>с энергетикой пространства,</Span> в которой
            живет/работает человек, и настраивают ее на достижение нужных целей.
          </Desc>
        </WrapDesc>

        <WrapNote>
          <Note>
            Амулет и набор свечей не исключают друг друга — наоборот, для
            лучшего результата рекомендуется использовать оба предмета Силы.
          </Note>
        </WrapNote>

        <WrapSecondTitle>
          <SecondTitle>
            Специальное предложение для тех, кто хочет прорыва <br />
            <SpanTitle>в Новом 2023 году</SpanTitle>
          </SecondTitle>
        </WrapSecondTitle>

        <Cards>
          <Card>
            <NameCard>
              Набор свечей <br />
              +
              <br />
              Амулет
            </NameCard>
            <PriceCost> Стоимость:</PriceCost>
            <Line></Line>
            <PriceCard>9000 Р</PriceCard>
            <WrapBtn onClick={openModal}>
              <Button>Купить</Button>
            </WrapBtn>
            <DeliveryCard>бесплатная доставка</DeliveryCard>
          </Card>
          <Card>
            <NameCard>
              Набор свечей <br />
              +
              <br />2 Амулета
            </NameCard>
            <PriceCost> Стоимость:</PriceCost>
            <Line></Line>
            <PriceCard>
              <SpanDecoration>13000 р</SpanDecoration> 11 700р
            </PriceCard>
            <WrapBtn onClick={openModal}>
              <Button>Купить</Button>
            </WrapBtn>
            <DeliveryCard>бесплатная доставка</DeliveryCard>
          </Card>
        </Cards>
      </WrapContent>
      <ImageBackground src={amuletImage} alt="image" />
      <ImageBackground src={ashImage} alt="image" />
      <ImageEllipse src={ellipseImage} alt="ellipse" />
      <MyModal color="white" modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <TestimonialsForm shadow={false} />
      </MyModal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #252525;
  padding: 45px 0px;
  position: relative;
`

const WrapContent = styled.div`
  z-index: 1;
  position: relative;
  padding: 0 15px;
`
const WrapTitle = styled.div`
  max-width: 356px;
  margin: 0 auto;
`
const WrapLine = styled.div`
  margin: 25px 0;
`
const Line = styled.div`
  width: 235px;
  height: 1px;
  background: #ffc344;
  margin: 0 auto;
`
const WrapDesc = styled.div`
  max-width: 320px;
  margin: 0 auto 20px;
`
const Desc = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  position: relative;
`
const WrapNote = styled.div`
  max-width: 347px;
  margin: 0 auto;
`
const Note = styled.p`
  font-weight: 600;
  font-style: italic;
  font-size: 14px;
  color: #ff9f10;
  line-height: 17px;
`
const WrapSecondTitle = styled.div`
  max-width: 276px;
  margin: 60px auto 30px;
`
const SecondTitle = styled.p`
  font-family: 'Trajan Pro 3';
  font-weight: 400;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
`
const SpanTitle = styled.span`
  color: #ffc344;
  font-family: 'Trajan Pro 3';
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
`
const Cards = styled.div``

const Card = styled.div`
  border: 1px solid #ffd57d;
  border-radius: 10px;
  padding: 25px;
  max-width: 297px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
`
const NameCard = styled.p`
  font-weight: 400;
  font-size: 27px;
  line-height: 99%;
  text-align: center;
`
const PriceCost = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 99%;
  text-align: center;
`
const PriceCard = styled.span`
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30.96px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
const DeliveryCard = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 99%;
  text-align: center;
`
const Span = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #ff9f10;
`
const SpanDecoration = styled.span`
  text-decoration: line-through;
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30.96px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ImageBackground = styled(Image)`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`

const WrapBtn = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ImageEllipse = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`
