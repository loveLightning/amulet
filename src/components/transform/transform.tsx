import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Title } from 'src/components'

import ash from '../../../public/images/ash.png'
import book from '../../../public/images/book.png'
import shadow from '../../../public/images/shadow.png'

export const Transform = () => {
  return (
    <Wrapper>
      <WrapContent>
        <WrapTitle>
          <Title>Как запустить процесс трансформаций с помощью свечи</Title>
        </WrapTitle>

        <Blocks>
          <Block>
            <BlockNumber>1</BlockNumber>
            <BlockDesc>
              Вы зажигаете свечу и проводите ритуал, следуя пошаговой инструкции
              в брошюре;
            </BlockDesc>
          </Block>
          <Block>
            <BlockNumber>2</BlockNumber>
            <BlockDesc>
              Ингредиенты в свече и сила Огня начинают активно работать и
              запускают перемены на тонком плане;
            </BlockDesc>
          </Block>
          <Block>
            <BlockNumber>3</BlockNumber>
            <BlockDesc>
              Ваше сознание настраивается на нужные частоты благодаря правильно
              сформулированному намерению и особому ритуалу — благодаря этому вы
              замечаете те возможности для воплощения мечты, которые не видели
              ранее;
            </BlockDesc>
          </Block>
          <Block>
            <BlockNumber>4</BlockNumber>
            <BlockDesc>
              Энергетика пространства во время работы со свечой перестраивается
              так, что начинает привлекать желаемое;
            </BlockDesc>
          </Block>
        </Blocks>

        <Bonus>
          <BonusTitle>БОНУС!</BonusTitle>
          <BonusText>
            В подарок к набору вы получите дополнительный ритуал на исполнение
            заветного желания в Новом году.
          </BonusText>
        </Bonus>
      </WrapContent>

      <ImageBook src={book} alt="candles" />
      <ImageShadow src={shadow} alt="candles" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.black};
  position: relative;
  padding: 46px 15px 0;
  position: relative;
  background-image: url(${ash.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 1282px;
`

const WrapContent = styled.div`
  position: relative;
  z-index: 1;
`
const WrapTitle = styled.div`
  max-width: 313px;
  margin: 0 auto 25px;
  z-index: 1;
  position: relative;
`

const ImageBook = styled(Image)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  left: 0;
  right: 0;
`

const ImageShadow = styled(Image)`
  position: absolute;
  left: 0;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`
const Blocks = styled.div`
  max-width: 368px;
  margin: 30px auto;
  display: flex;
  gap: 23px;
  flex-direction: column;
`

const Block = styled.div`
  width: 100%;
  left: 31px;
  top: 451px;

  background: linear-gradient(
    115.31deg,
    #424242 -31.18%,
    rgba(66, 66, 66, 0) 175.33%
  );
  border-radius: 10px;
  display: flex;
  gap: 23px;
  justify-content: center;
  gap: 20px;
  padding: 25px;
  align-items: center;
`
const BlockNumber = styled.p`
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 129%;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const BlockDesc = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`
const Bonus = styled.div`
  max-width: 160px;
  margin-left: 53px;
`
const BonusTitle = styled.p`
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 129%;
  /* or 21px */

  text-transform: uppercase;

  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const BonusText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`
