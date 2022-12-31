import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Button } from 'src/components'
import { device } from 'src/utils'

import ash from '../../../public/images/ash.png'
import mainImage from '../../../public/images/main.jpg'

export const MainScreen = () => {
  return (
    <>
      <Wrapper>
        <Wrap>
          <WrapTitle>
            <Title>для исполнения желаний в Новом году от Ирэны Ивановой</Title>
          </WrapTitle>
          <WrapDesc>
            <Desc>
              Очистите энергетику дома, привлеките в него любовь и деньги,
              воплотите мечту и поставьте защиту от негатива
            </Desc>
          </WrapDesc>
          <a href="#form">
            <Button>Заказать набор</Button>
          </a>
        </Wrap>
      </Wrapper>

      <WrapYear>
        <AshImage priority src={ash} alt="ash" />
        <WrapContent>
          <TitleYear>
            В <Span>уходящем</Span> году вы могли заметить, что в вашем доме:
          </TitleYear>
          <List>
            <ItemList>Появился холод в отношениях с партнером;</ItemList>
            <ItemList>
              Чувствуется недостаток денег и энергия экономии;
            </ItemList>
            <ItemList>
              Возникла тяжелая атмосфера, участились ссоры между домочадцами,
              наблюдается упадок сил;
            </ItemList>
            <ItemList>
              Присутствует ощущение незащищенности, уязвимости перед чужим
              негативом, завистью, сглазами;
            </ItemList>
            <ItemList>С трудом воплощаются мечты;</ItemList>
            <ItemList another>
              Накопился негатив от проводимых консультаций (если вы — эзотерик и
              помогающий практик).
            </ItemList>
          </List>
        </WrapContent>
      </WrapYear>
    </>
  )
}

const Wrapper = styled.div`
  background-image: url(${mainImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20% 48px 50px;
  height: 532px;
  @media (max-width: 460px) {
    height: auto;
  }
  @media ${device.mobileM} {
    padding: 20% 48px 30px;
  }
`

const Wrap = styled.div`
  padding: 0 15px;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`
const WrapTitle = styled.div`
  max-width: 177px;
  margin-bottom: 40px;
`

const Desc = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 132.5%;
`
const WrapDesc = styled.div`
  max-width: 186px;
  margin-bottom: 37px;
`

const WrapYear = styled.div`
  background: ${({ theme }) => theme.layout};
  padding: 34px 0 48px;
  position: relative;
`

const AshImage = styled(Image)`
  position: absolute;
  top: 0;
  height: auto;
  width: 100%;
`

const TitleYear = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 134%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  margin-bottom: 30px;
`
const Span = styled.span`
  color: ${({ theme }) => theme.green};
`
const List = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;
`

interface ItemListStyled {
  another?: boolean
}

const ItemList = styled.p<ItemListStyled>`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  position: relative;
  color: ${({ another, theme }) => (another ? theme.light_green : theme.white)};
  margin-left: 15px;
  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.light_green};
    position: absolute;
    top: 4px;
    left: -15px;
  }
`
const WrapContent = styled.div`
  max-width: 281px;
  padding: 0 15px;
  margin: 0 auto;
`
