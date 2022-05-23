import styled from 'styled-components'

export const StyledDropdown = styled.div`
  width: 400px;
  height: 93px;
  border: 2px solid #707070;
  border-radius: 8px;
  font-size: 32px;
  text-align: left;
  cursor: pointer;
  padding: 28px;
  margin-top: 30px;
  position: relative;
  @media (max-width: 530px) {
    width: 300px;
    height: 75px;
    font-size: 26px;
    padding: 20px;
  }
`

export const DropdownButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ArrowDown = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  border-style: solid;
  border-color: #b5b5b5;
  border-width: 0px 4px 4px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
`

export const DropdownContent = styled.div`
  position: absolute;
  left: -2px;
  top: 93%;
  width: 101%;
  border: 2px solid #707070;
  background: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 530px) {
    width: 101.3%;
  }
`

export const DropdownItem = styled.div`
  border-bottom: 2px solid #b5b5b5;
  padding: 15px 28px;
`
