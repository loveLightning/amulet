import 'node_modules/video-react/dist/video-react.css'

import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import videoImage from '../../../public/images/first-video.png'
import orderShadowImage from '../../../public/images/order-shadow.png'
import { TestimonialsForm } from './testimonials-form'
import { dataReviews, dataVideo } from './types'

export const Testimonials = () => {
  const [video, setVideo] = useState(dataVideo)

  const toggleVideo = (id: number) => {
    // setVideo((prev) => {
    //   const newState = prev.map((el) => {
    //     if (el.id === id) {
    //       return { ...el, active: !el.active }
    //     } else {
    //       return { ...el }
    //     }
    //   })
    //   return newState
    // })
  }

  return (
    <Wrapper>
      <Wrap>
        <WrapTitle>
          <Title>
            Посмотрите, как предметы <br /> Силы от Ирэны <br /> помогли другим
            людям!
          </Title>
        </WrapTitle>
        <Swiper
          style={{ position: 'relative', zIndex: 1 }}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}>
          {video?.map((el, id) => (
            <CustomSwiperSlide key={el.id}>
              <WrapVideo onClick={() => toggleVideo(id)}>
                <Video poster={videoImage.src} controls>
                  <source
                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    type="video/mp4"
                  />
                </Video>
              </WrapVideo>
            </CustomSwiperSlide>
          ))}
        </Swiper>
        <Swiper
          style={{ position: 'relative', zIndex: 1 }}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}>
          {dataReviews?.map((el) => (
            <SwiperSlide key={el.id}>
              <Block>
                <ImageReview src={el.image} alt="review" />
              </Block>
            </SwiperSlide>
          ))}
        </Swiper>
        <HowDelivery>
          <Title>Как заказать?</Title>
          <WrapContent>
            <Line></Line>
            <WrapDesc>
              <Desc>Оставьте заявку;</Desc>
            </WrapDesc>
            <Line></Line>

            <WrapDesc>
              <Desc>
                Заполните Ваши данные или данные того, кто будет пользоваться
                свечами для заряда свечей в специальном поле;
              </Desc>
            </WrapDesc>
            <Line></Line>

            <WrapDesc>
              <Desc>Заполните адрес для доставки;</Desc>
            </WrapDesc>
            <Line></Line>

            <WrapDesc>
              <Desc>Оплатите заказ;</Desc>
            </WrapDesc>
            <Line></Line>

            <WrapDesc>
              <Desc>
                Дождитесь готовности набора свечей - в целом заряд и отправка
                занимает до 14 дней.
              </Desc>
            </WrapDesc>
          </WrapContent>
        </HowDelivery>

        <TestimonialsForm />
      </Wrap>
      <ImageShadow src={orderShadowImage} alt="shadow" />
    </Wrapper>
  )
}
const WrapTitle = styled.div`
  max-width: 340px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  background: #020304;
  position: relative;
  margin: 0 auto;
  padding: 30px 0;
`

const Wrap = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 15px;
`
const Title = styled.p`
  font-family: Muller, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  text-align: center;
`

const ImageReview = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 9px;
`
const Block = styled.div`
  background: linear-gradient(180deg, #ffe5bd 0%, #ffddaa 6.25%, #ec8e00 100%);
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.28);
  border-radius: 9px;
  width: 269px;
  padding: 10px;
  margin: 40px auto 0;
`
const Line = styled.div`
  width: 30px;
  border: 1px solid #f0ae20;
  transform: rotate(90deg);
  background: #f0ae20;
`

const HowDelivery = styled.div`
  max-width: 329px;
  border: 1px solid #ff9f10;
  border-radius: 10px;
  padding: 25px 30px;
  margin: 40px auto 0;
`
const WrapDesc = styled.div`
  max-width: 253px;
  text-align: center;
`
const Desc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
`

const WrapContent = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const ImageShadow = styled(Image)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`

const Video = styled.video`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  max-width: 317px;
  width: 100%;
  height: auto;
`

const WrapVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  cursor: pointer;
`

const CustomSwiperSlide = styled((props) => <SwiperSlide {...props} />)`
  height: auto !important;
`
