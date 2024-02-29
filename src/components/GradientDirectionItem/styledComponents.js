import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
    font-family: 'Roboto';
    color: ${props => (props.isActive ? '#334155' : '#1e293b')}
    background-color: #ffffff79;
    font-size: 14px;
    text-align: center;
    font-weigth: 500;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
`
