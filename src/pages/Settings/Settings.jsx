import Button from '@/components/Button/Button'
import React from 'react'
import styled from 'styled-components'

import { btnTypes } from '@/constants/btnTypes'
import { ClearHistoryCommand } from '@/utils/commands'
import Dropdown from '@/components/Dropdown/Dropdown'

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 80px;
`

const SettingsTitle = styled.h1`
  font-size: 64px;
  font-weight: normal;
  color: #000000;
`
const StyledButton = styled.button`
  width: 400px;
  height: 93px;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 32px;
  text-align: left;
  cursor: pointer;
  padding: 28px;
  margin-top: 30px;
`

const Settings = () => {
  return (
    <StyledSettings>
      <SettingsTitle>Settings</SettingsTitle>
      <Dropdown />
      <StyledButton>Clear All History</StyledButton>
    </StyledSettings>
  )
}

export default Settings
