import styled from 'styled-components'

export const Container = styled.div`
  max-width: 512px;
  margin: 0 auto;
`

export const InnerContainer = styled.div`
  padding: 0 15px;
`

export const Title = styled.h2`
  font-family: Muller, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 129%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`

export const Button = styled.button`
  width: 175px;
  height: 36px;
  background: linear-gradient(99.47deg, #ffd57d 30.03%, #f0ae20 101.92%);
  box-shadow: 0px 4px 40px rgba(255, 211, 118, 0.65), 0px 2px 1px #b97002;
  border-radius: 24px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  border: none;
  z-index: 100;
  position: relative;
`

export const Field = styled.div`
  margin-bottom: 10px;
`

export const Error = styled.p`
  color: red;
  font-size: 12px;
`

export const Input = styled.input`
  border: 1px solid #989898;
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  line-height: 13px;
  padding-right: 11px;
  border-radius: 5px;
  padding-left: 11px;
  color: black;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #757575;
    white-space: pre-wrap;
  }
  &:focus {
    border: 1px solid black;
  }
`

export const TextArea = styled.input`
  border: 1px solid #989898;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 13px;
  padding-right: 11px;
  border-radius: 5px;
  padding-left: 11px;
  padding-bottom: 100px;
  padding-top: 15px;
  color: black;
  outline: none;
  resize: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #757575;
    white-space: pre-wrap;
  }
  &:focus {
    border: 1px solid black;
  }
`
