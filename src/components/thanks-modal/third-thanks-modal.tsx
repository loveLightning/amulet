import React from 'react'
import styled from 'styled-components'

import { MyModal } from 'src/components'

interface Props {
  modalIsOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const ThirdThanksModal = ({ modalIsOpen, setIsOpen }: Props) => {
  return (
    <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
      <Content>
        <WrapTitle>
          <Title>
            Спасибо,
            <br /> ваш заказ был принят
          </Title>
        </WrapTitle>

        <WrapDesc>
          <Desc>Данные о доставе успешно отправлены!</Desc>
        </WrapDesc>
      </Content>
    </MyModal>
  )
}
const Content = styled.div`
  padding: 50px 40px 50px;
  overflow: auto;
`

const WrapTitle = styled.div`
  max-width: 303px;
  margin: 0 auto;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 127.56%;
  text-align: center;
  text-transform: uppercase;
  color: #707070;
`

const WrapDesc = styled.div`
  max-width: 290.99px;
  margin: 24px auto 15px;
`
const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
