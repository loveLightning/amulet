import 'react-phone-input-2/lib/style.css'

import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { Formik } from 'formik'
import styled from 'styled-components'

import { orderSchema } from 'src/schemas'
import { PhoneTypes } from 'src/types'

import { Button, Title } from '../styles'

interface ValuesProps {
  name: string
  phone: string
  email: string
}

const initialValues: ValuesProps = {
  name: '',
  phone: '',
  email: '',
}

export const TestimonialsForm: React.FC<{ shadow?: boolean }> = ({
  shadow = true,
}) => {
  const [country, setCountry] = useState('ru')

  const onSubmit = () => { }

  return (
    <Wrap id="form">
      <Wrapper shadow={shadow}>
        <Content>
          <CustomTitle>Заполните данные для оформления заказа</CustomTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={orderSchema}>
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
              handleSubmit,
              handleBlur,
              isSubmitting,
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
                      <Error>
                        {errors.name && touched.name && errors.name}
                      </Error>
                    </Field>

                    <Field>
                      <PhoneInput
                        preferredCountries={['ru', 'kz', 'by', 'ae', 'us']}
                        placeholder="+7"
                        inputProps={{ name: 'phone' }}
                        country={country}
                        onBlur={handleBlur}
                        value={values.phone}
                        onChange={(
                          phone: string,
                          formattedValue: PhoneTypes,
                        ) => {
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

                    <WrapButton>
                      <Button
                        style={{ position: 'static' }}
                        type="submit"
                        disabled={isSubmitting}>
                        Заказать
                      </Button>
                    </WrapButton>
                  </div>
                </>
              </form>
            )}
          </Formik>
          <Note>
            Отправляя заявку, вы даете согласие на обработку своих персональных
            данных в соответствии с политикой конфиденциальности.
          </Note>
        </Content>
      </Wrapper>
    </Wrap>
  )
}

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

const Wrapper = styled.div<{ shadow: boolean }>`
  padding: 30px;
  background: white;
  max-width: 385px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: ${({ shadow }) =>
    shadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
  border-radius: 5px;
`
const Content = styled.div`
  max-width: 305px;
  margin: 0 auto;
`

const CustomTitle = styled((props) => <Title {...props} />)`
  margin-bottom: 40px;
  color: black !important;
`

const Note = styled.p`
  font-weight: 400;
  font-size: 7px;
  line-height: 128%;
  color: #737373;
  margin-top: 20px;
`

const Input = styled.input`
  border: 1px solid #989898;
  width: 100%;
  height: 26.23px;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  border-radius: 5px;
  padding-left: 11px;
  color: black;
  outline: none;
  &::placeholder {
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    color: #989898;
  }
  &:focus {
    border: 1px solid black;
  }
`

const Error = styled.p`
  color: red;
  font-size: 12px;
`

const WrapButton = styled.div`
  text-align: center;
  margin-top: 20px;
`

const Field = styled.div`
  margin-bottom: 10px;
`
