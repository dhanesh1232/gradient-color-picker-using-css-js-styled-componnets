// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 5px;
`
export const CustomButton = styled.button`
  border-radius: 5px;
  border: 0px solid transparent;
  height: 2.5rem;
  color: #334155;
  width: 8rem;
  background-color: ${props => props.bgColor};
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
