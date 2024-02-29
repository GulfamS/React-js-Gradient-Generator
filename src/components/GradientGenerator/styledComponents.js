import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
  color: #ededed;
  font-weight: 500;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 70%;
    max-width: 450px;
  }
`

export const ColorsPickerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
  color: #ededed;
  font-weight: 500;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 350px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`

export const CustomInput = styled.input`
  height: 50px;
  width: 100px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 6px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 18px;
`
