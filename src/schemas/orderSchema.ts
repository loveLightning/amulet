import * as yup from 'yup'

import { emailRegex } from './regexps'

export const orderSchema = yup.object({
  name: yup
    .string()
    .required('Это обязательное поле')
    .test('len', 'Минимальное кол-во символов - 2', function (val) {
      return (val as string)?.length >= 2
    }),
  phone: yup
    .string()
    .required('Это обязательное поле')
    .test('len', 'Введите корректный номер', function (val) {
      return (val as string)?.length <= 15
    }),
  email: yup
    .string()
    .matches(emailRegex, 'Неверный email')
    .required('Это обязательное поле'),
})
