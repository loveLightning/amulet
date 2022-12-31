import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'

import { Button, Error, Field, Input, MyModal, TextArea } from 'src/components'

interface Props {
  modalIsOpen: boolean
  setIsOpen: (open: boolean) => void
}

interface ValuesProps {
  data: string
  composition: string
  address: string
  date: string
}

const initialValues: ValuesProps = {
  data: '',
  composition: '',
  address: '',
  date: '',
}

export const SecondThanksModal = ({ modalIsOpen, setIsOpen }: Props) => {
  const onSubmit = () => { }

  return (
    <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
      <Content>
        <WrapTitle>
          <Title>Оплата заказа #45848</Title>
        </WrapTitle>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <>
                <div>
                  <Desc>Данные платильщика</Desc>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="data"
                      onChange={handleChange}
                      value={values.data}
                      placeholder="Мария Василенко
                      8 932 934 934 92"
                    />
                    <Error>{errors.data && touched.data && errors.data}</Error>
                  </Field>
                  <Desc>Дата рождения</Desc>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="date"
                      onChange={handleChange}
                      value={values.date}
                      placeholder="27.03.1992"
                    />
                    <Error>{errors.date && touched.date && errors.date}</Error>
                  </Field>
                  <Desc>Адрес</Desc>

                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="address"
                      onChange={handleChange}
                      value={values.address}
                      placeholder="Город, улица, дом, номер кв"
                    />
                    <Error>
                      {errors.address && touched.address && errors.address}
                    </Error>
                  </Field>
                  <Desc>Состав заказа</Desc>
                  <Field>
                    <TextArea
                      type="text"
                      onBlur={handleBlur}
                      name="composition"
                      onChange={handleChange}
                      value={values.composition}
                      placeholder="Мастер класс Интуитивное &#10;Таро -  Тариф&#10;самостоятельный&#10;7 990 руб."
                    />
                    <Error>
                      {errors.composition &&
                        touched.composition &&
                        errors.composition}
                    </Error>
                  </Field>
                </div>
              </>
            </form>
          )}
        </Formik>
        <Wrap>
          <SecondTitle>Итого к оплате: 7990 руб.</SecondTitle>
        </Wrap>
        <Wrapper>
          <WrapPay>
            <Pay>
              Оплата картой <Span>Российского банка</Span> онлайн:
            </Pay>
            <Button>Полная оплата картой</Button>
          </WrapPay>
          <WrapPay>
            <Pay>
              Оплата картой <Span>Зарубежного банка</Span> онлайн:
            </Pay>
            <Button>Полная оплата картой</Button>
          </WrapPay>
        </Wrapper>
      </Content>
    </MyModal>
  )
}
const Content = styled.div`
  padding: 50px 40px 50px;
  overflow: auto;
`

const Wrapper = styled.div`
  padding: 30px 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #fbfbfb;
  border-radius: 5px;
  margin-top: 20px;
`

const WrapTitle = styled.div`
  max-width: 303px;
  margin: 0 auto 45px;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 127.56%;
  text-align: center;
  text-transform: uppercase;
  color: #707070;
`

const Wrap = styled.div`
  max-width: 241px;
  margin-top: 20px;
`

const SecondTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 124.5%;
  color: #262626;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin: 15px 20px 10px;
`

const WrapPay = styled.div``

const Pay = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 124.5%;
  color: #262626;
  margin-bottom: 30px;
`

const Span = styled.span`
  color: #de9904;
  font-weight: 600;
  font-size: 24px;
  line-height: 124.5%;
`
