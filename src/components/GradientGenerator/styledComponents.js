// Style your elements here
import styled from 'styled-components'

export const PageContainer = styled.div`
  font-family: 'Roboto';
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props =>
    `linear-gradient(to ${props.gradientDirection}, ${props.color2}, ${props.color1})`};
`
export const MainHeading = styled.h1`
  font-weight: 500;
  color: #ffffff;
  font-size: 34px;
`
export const DirectionHeading = styled.p`
  font-weight: normal;
  font-size: 23px;
  color: #ffffff;
`
export const DirectionList = styled.ul`
  list-style: none;
  width: 35%;
  display: flex;
`
export const ColorPicker = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`
export const ColorContainer = styled.form`
  display: flex;
  width: 20%;
  justify-content: space-between;
`
export const ColorInput = styled.input`
  height: 3.4rem;
  width: 7rem;
  border: 0px solid;
  background-color: transparent;
  cursor: pointer;
`
export const ColorPallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorValue = styled.p`
  font-size: 18px;
`
export const GenerateButton = styled.button`
  height: 2.4rem;
  width: 8rem;
  margin: 15px;
  border: 0px solid;
  background-color: #00c9b7;
  color: #1e293b;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`
