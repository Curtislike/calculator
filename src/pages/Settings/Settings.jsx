import Button from '@/components/Button/Button'
import React from 'react'

import { btnTypes } from '@/constants/btnTypes'
import { ClearHistoryCommand } from '@/utils/commands'
import Dropdown from '@/components/Dropdown'
import {
  StyledSettings,
  SettingsTitle,
  StyledButton,
} from './components'

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
