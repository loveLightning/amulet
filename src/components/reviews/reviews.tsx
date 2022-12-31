import 'swiper/css/navigation'
import 'swiper/css/pagination'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Title } from 'src/components'

import founderImage from '../../../public/images/founder-shadow.png'
import gate from '../../../public/images/gate.png'
import shadowImage from '../../../public/images/shadow-button.png'

export const Reviews = () => {
  return (
    <Wrapper>
      <WrapContent>
        <WrapTitle>
          <Title>
            Результаты работы со свечами — счастливые перемены во всех сферах
            жизни
          </Title>
        </WrapTitle>

        <SubTitle>в 2023 году</SubTitle>

        <Swiper
          style={{ position: 'relative', zIndex: 1 }}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <Block>
              <NameBlock>Любовь</NameBlock>
              <Line></Line>
              <Desc>
                Привлечение достойного партнера;
                <br /> <br />
                Возрождение любви и страсти в вашем доме; <br /> <br />
                Увеличение гармонии в паре. <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock>Деньги</NameBlock>
              <Line></Line>
              <Desc>
                Увеличение достатка;
                <br /> <br />
                Привлечение финансов в дом; <br /> <br />
                Пропитка пространства энергией процветания. <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock> Энергетика дома</NameBlock>
              <Line></Line>
              <Desc>
                Уменьшение ссор с домочадцами;
                <br /> <br />
                Устранение порч, сглазов, магических воздействий; <br /> <br />
                Теплая атмосфера дома. <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock>Любовь</NameBlock>
              <Line></Line>
              <Desc>
                Привлечение достойного партнера;
                <br /> <br />
                Возрождение любви и страсти в вашем доме; <br /> <br />
                Увеличение гармонии в паре. <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock>Защита от негатива</NameBlock>
              <Line></Line>
              <Desc>
                Защита дома от магического воздействия;
                <br /> <br />
                Защита пространства от недобрых гостей и опасных ситуаций;{' '}
                <br /> <br />
                Чувство безопасности и защищенности. <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock>Магия, эзотерика, работа с Таро</NameBlock>
              <Line></Line>
              <Desc>
                Очищение предметов Силы: талисманов, амулетов, колод Таро;
                <br /> <br />
                Защита вашего пространства во время консультации от клиентского
                негатива; <br /> <br />
                Усиление своих обрядов и ритуалов с помощью изменения энергетики
                пространства.
                <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>

          <SwiperSlide>
            <Block>
              <NameBlock> Исполнение желаний</NameBlock>
              <Line></Line>
              <Desc>
                Отсечение несчастий и преград, мешающих достичь желаемого;
                <br /> <br />
                Привлечение благоприятных возможностей; <br /> <br />
                Использование энергии дома для помощи в воплощении мечты.
                <br /> <br />
              </Desc>
            </Block>
          </SwiperSlide>
        </Swiper>

        <Price>
          <PricePrice>Стоимость:</PricePrice>
          <RriceText>5000 Р</RriceText>
          <a href="#form">
            <Button>Приобрести</Button>
          </a>
          <ShadowImage src={shadowImage} alt="shadow"></ShadowImage>
        </Price>
      </WrapContent>
      <ImageFounder src={founderImage} alt="founderImage" />
      <WrapContentSecond>
        <SecondWrapTitle>
          <Title>Создатель свечей — Ирэна Иванова</Title>
        </SecondWrapTitle>
        <List>
          <ListText>
            {' '}
            Таролог, нумеролог и персонолог <Span>с 32-летним опытом;</Span>
          </ListText>
          <ListText>
            <Span>Блогер №1</Span> в России по тематике Таро;
          </ListText>
          <ListText>Мастер, проведший более 100 тысяч консультаций;</ListText>
          <ListText>
            Автор с суммарной аудиторией 550 тысяч подписчиков;
          </ListText>
          <ListText>
            Наставник, обучивший <Span>более 3 тысяч учеников;</Span>
          </ListText>
          <ListText>
            Создатель предметов Силы, которые помогли более чем 15 тысячам
            людей.
          </ListText>
        </List>
        <a href="#form">
          <CustomButton>
            Присоединиться к тем, у кого изменилась жизнь
          </CustomButton>
        </a>
      </WrapContentSecond>
      <ImageBook src={gate} alt="candles" />
      <ImageBlack />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  padding: 46px 0 54px;
  background: #161823;
`

const WrapContent = styled.div`
  padding: 0 15px;
`

const WrapContentSecond = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -340px;
  padding: 0 15px;
`
const SubTitle = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  font-family: 'Trajan Pro 3, serif';
  margin-bottom: 41px;
  position: relative;
  z-index: 1;
`

const WrapTitle = styled.div`
  max-width: 388px;
  margin: 0 auto 15px;
  position: relative;
  z-index: 1;
`

const SecondWrapTitle = styled.div`
  max-width: 313px;
  margin: 0 auto 15px;
`

const ImageBook = styled(Image)`
  position: absolute;
  width: 100%;
  height: auto;
  top: 95px;
  left: 0;
  right: 0;
`
const Block = styled.div`
  max-width: 337px;
  background: #242734;
  border: 1px solid #ffd57d;
  border-radius: 10px;
  padding: 35px 30px;
  margin: 0 auto;
`
const NameBlock = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28.8px;
  text-align: center;
  font-family: 'Trajan Pro 3, serif';
`
const Line = styled.div`
  width: 188px;
  height: 1px;
  text-align: center;
  background: ${({ theme }) => theme.light_green};
  margin: 10px auto;
`
const Desc = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 19.2px;
`
const Price = styled.div`
  max-width: 337px;
  padding: 25px 30px;
  border: 1px solid #ffd57d;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin: 25px auto 56px;
  position: relative;
  z-index: 3;
`
const PricePrice = styled.p`
  font-family: 'Trajan Pro 3, sans-serif';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`
const RriceText = styled.p`
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 129%;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(136.91deg, #ffefcb -14.6%, #ff9f10 63.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ShadowImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`

const ImageFounder = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: -270px;
  position: relative;
  z-index: 1;
  @media (max-width: 500px) {
    margin-bottom: 50px;
    margin-top: -250px;
  }

  @media (max-width: 435px) {
    margin-bottom: 150px;
    margin-top: -200px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 321px;
  margin: 0 auto 30px;
`

const ListText = styled.p`
  font-family: Muller, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 129%;
  position: relative;
  margin-left: 15px;
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: -10px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
  }
`

const Span = styled.span`
  font-family: Muller, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 129%;
  color: #ffc344;
`

const CustomButton = styled((props) => <Button {...props} />)`
  padding: 15px 40px;
  width: 292px !important;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const ImageBlack = styled.div`
  height: 815px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(180deg, #161823 0%, #000000 100%);
`
