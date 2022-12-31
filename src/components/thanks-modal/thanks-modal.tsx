import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { Formik } from 'formik'
import styled from 'styled-components'

import { Error, Field, Input, MyModal } from 'src/components'
import { firstThanksSchema } from 'src/schemas'
import { PhoneTypes } from 'src/types'

interface Props {
  modalIsOpen: boolean
  setIsOpen: (open: boolean) => void
}

interface ValuesProps {
  name: string
  email: string
  phone: string
  address: string
  typeDelivery: string
  anotherName: string
  anotherDate: string
  anotherNumberHome: string
}

const initialValues: ValuesProps = {
  name: '',
  email: '',
  phone: '',
  address: '',
  typeDelivery: '',
  anotherName: '',
  anotherDate: '',
  anotherNumberHome: '',
}

export const ThanksModal = ({ modalIsOpen, setIsOpen }: Props) => {
  const [country, setCountry] = useState('ru')

  const onSubmit = () => { }

  return (
    <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
      <Content>
        <WrapTitle>
          <Title>
            Спасибо, <br /> ваш заказ был принят
          </Title>
        </WrapTitle>

        <WrapDesc>
          <Desc>
            Укажите подробныйе данные о доаставке, чтобы ускорить процесс
            подтверждения заказа
          </Desc>
        </WrapDesc>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={firstThanksSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleSubmit,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <>
                <div>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      placeholder="ФИО"
                    />
                    <Error>{errors.name && touched.name && errors.name}</Error>
                  </Field>
                  <Field>
                    <PhoneInput
                      inputClass="nnn"
                      preferredCountries={['ru', 'kz', 'by', 'ae', 'us']}
                      placeholder="+7"
                      inputProps={{ name: 'phone' }}
                      country={country}
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={(phone: string, formattedValue: PhoneTypes) => {
                        setCountry(formattedValue.countryCode)
                        setFieldValue('phone', phone)
                      }}
                    />
                    <Error>
                      {errors.phone && touched.phone && errors.phone}
                    </Error>
                  </Field>
                  <Field>
                    <Input
                      type="email"
                      onBlur={handleBlur}
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Введите ваш email"
                    />
                    <Error>
                      {errors.email && touched.email && errors.email}
                    </Error>
                  </Field>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="address"
                      onChange={handleChange}
                      value={values.address}
                      placeholder="Адрес доставки, страна, город,
                      улица, дом, квартира, получатель"
                    />
                    <Error>
                      {errors.address && touched.address && errors.address}
                    </Error>
                  </Field>

                  <Type>Тип доставки</Type>
                  <Field>
                    <Label>
                      {' '}
                      <input
                        type="radio"
                        name="typeDelivery"
                        value={values.typeDelivery}
                        onChange={handleChange}
                        checked
                      />
                      СДЭК (до склада)
                    </Label>
                  </Field>
                  <Field>
                    <Label>
                      {' '}
                      <input
                        type="radio"
                        name="typeDelivery"
                        value={values.typeDelivery}
                        onChange={handleChange}
                      />
                      СДЭК (до двери)
                    </Label>
                  </Field>
                  <Field>
                    <Label>
                      {' '}
                      <input
                        type="radio"
                        name="typeDelivery"
                        value={values.typeDelivery}
                        onChange={handleChange}
                      />
                      Доставка почта России
                    </Label>
                  </Field>

                  <WrapNote>
                    <Note>
                      Укажите данные того, кто будет пользоваться свечами для
                      индивидуального заряда:
                    </Note>
                  </WrapNote>

                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="anotherName"
                      onChange={handleChange}
                      value={values.anotherName}
                      placeholder="ФИО"
                    />
                    <Error>
                      {errors.anotherName &&
                        touched.anotherName &&
                        errors.anotherName}
                    </Error>
                  </Field>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="anotherDate"
                      onChange={handleChange}
                      value={values.anotherDate}
                      placeholder="Дата рождения"
                    />
                    <Error>
                      {errors.anotherDate &&
                        touched.anotherDate &&
                        errors.anotherDate}
                    </Error>
                  </Field>
                  <Field>
                    <Input
                      type="text"
                      onBlur={handleBlur}
                      name="anotherNumberHome"
                      onChange={handleChange}
                      value={values.anotherNumberHome}
                      placeholder="Номер дома и квартиры"
                    />
                    <Error>
                      {errors.anotherNumberHome &&
                        touched.anotherNumberHome &&
                        errors.anotherNumberHome}
                    </Error>
                  </Field>
                </div>
              </>
            </form>
          )}
        </Formik>
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

const Type = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 30px;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #757575;
  display: flex;
  gap: 20px;
  align-items: center;
`

const WrapNote = styled.div`
  width: 290.99px;
  margin: 35px auto 20px;
`
const Note = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
