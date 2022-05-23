import styled from 'styled-components'

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25px;
  border-left: 2px solid #707070;
  padding: 0 53px;
  @media (max-width: 1160px) {
    padding: 0 30px;
  }
  @media (max-width: 780px) {
    padding: 0 15px;
  }
  @media (max-width: 650px) {
    margin: 0 10px;
    padding: 0 10px;
  }
`

export const HistoryTitle = styled.div`
  font-size: 32px;
  @media (max-width: 650px) {
    font-size: 26px;
  }
`

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HistoryResultWrap = styled.div`
  font-size: 32px;
  align-self: flex-start;
  margin-top: 50px;
  height: 800px;
  width: 200px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #434343;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    color: white;
  }
  @media (max-width: 1340px) {
    height: 600px;
  }
  @media (max-width: 1160px) {
    height: 500px;
  }
  @media (max-width: 920px) {
    height: 400px;
    width: 150px;
    font-size: 26px;
  }
  @media (max-width: 650px) {
    height: 200px;
    width: 100px;
    font-size: 18px;
  }
`

export const HistoryResult = styled.div`
  padding: 10px;
`
export const CloseBtn = styled.div`
  margin: 0 15px;
  cursor: pointer;
  .bar1 {
    width: 35px;
    height: 4px;
    background-color: #333;
    margin: 6px 0;
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .bar2 {
    width: 35px;
    height: 4px;
    background-color: #333;
    margin: 6px 0;
    opacity: 0;
  }
  .bar3 {
    width: 35px;
    height: 4px;
    background-color: #333;
    margin: 7px 0;
    transform: rotate(45deg) translate(-8px, -8px);
  }
`
