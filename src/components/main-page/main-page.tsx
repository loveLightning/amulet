import React, { useState } from 'react'

import {
  Amulet,
  Candles,
  Faq,
  MainLayout,
  MainScreen,
  Reviews,
  SliderCandles,
  Testimonials,
  ThanksModal,
  Transform,
} from 'src/components'

import { FourthThanksModal } from '../thanks-modal/fourth-thanks-modal'
import { SecondThanksModal } from '../thanks-modal/second-thanks-modal'
import { ThirdThanksModal } from '../thanks-modal/third-thanks-modal'

export const MainPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <MainLayout>
        <MainScreen />
        <SliderCandles />
        <Candles />
        <Transform />
        <Reviews />
        <Amulet />
        <Testimonials />
        <Faq />
        {/* <ThanksModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
        {/* <SecondThanksModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
        {/* <ThirdThanksModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
        {/* <FourthThanksModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
      </MainLayout>
    </>
  )
}
