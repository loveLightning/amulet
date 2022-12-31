import 'swiper/css'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Title } from 'src/components'

import bottomAsh from '../../../public/images/bottom-ash.png'
import { dataCarousel } from './types'

export const SliderCandles = () => {
  return (
    <Wrapper>
      <Swiper style={{ height: '100%' }} loop={true} slidesPerView={1}>
        {dataCarousel?.map((el) => (
          <SwiperSlide key={el.id}>
            <Wrap>
              <ImageCarousel src={el.image} alt="carousel" />
              <WrapSlide>
                <WrapTitle>
                  <Title>{el.title}</Title>
                </WrapTitle>

                <SubDesc>Действие: </SubDesc>
                <Desc>{el.action}</Desc>

                <SubDesc>Цвет: {el.color}</SubDesc>
                <Desc>{el.colorDesc}</Desc>

                <SubDesc>Аромат: {el.fragrance}</SubDesc>
                <Desc>{el.fragranceDesc}</Desc>

                <SubDesc>Действие: </SubDesc>
                <Desc>{el.action}</Desc>

                <SubDesc>Обряд, для которого создана свеча: </SubDesc>
                <Desc>{el.rite}</Desc>
              </WrapSlide>
            </Wrap>
            <a href="#form">
              <WrapButton>
                <Button>Купить набор</Button>
              </WrapButton>
            </a>
          </SwiperSlide>
        ))}
        <ImageAsh priority src={bottomAsh} alt="bottomAsh" />
      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.black};
  position: relative;
  height: 1450px;
  @media (max-width: 470px) {
    height: 1350px;
  }
  @media (max-width: 400px) {
    height: 1250px;
  }
  @media (max-width: 370px) {
    height: 1220px;
  }
`

const Wrap = styled.div`
  height: 100%;
`

const ImageCarousel = styled(Image)`
  width: 100%;
  height: auto;
`

const SubDesc = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #ffb748;
  margin-bottom: 17px;
`
const Desc = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 17px;
`

const WrapSlide = styled.div`
  max-width: 319px;
  padding: 0 15px;
  margin: 0 auto;
  margin-top: -90%;
`

const WrapTitle = styled.div`
  margin-bottom: 43px;
  max-width: 260px;
`

const WrapButton = styled.div`
  text-align: center;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`

const ImageAsh = styled(Image)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`
