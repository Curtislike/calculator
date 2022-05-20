import React from 'react'
import styled from 'styled-components'

import Button from '@/components/Button/Button'
import { btnTypes } from '@/constants/btnTypes'
import { AddCommand } from '@/utils/commands'

const StyledKeypad = styled.div`
  margin: 28px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px 130px;
  align-items: center;
  @media (max-width: 1340px) {
    gap: 30px 75px;
  }
  @media (max-width: 1042px) {
    gap: 26px 44px;
  }
  @media (max-width: 650px) {
    gap: 22px 40px;
  }
`

class Keypad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledKeypad>
        {btnTypes.map(({ type, label, command }) => (
          <Button
            key={label}
            type={type}
            label={label}
            command={command}
            executeCommand={this.props.executeCommand}
          />
        ))}
      </StyledKeypad>
    )
  }
}

export default Keypad
