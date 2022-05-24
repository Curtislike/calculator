import React from 'react'

import { btnTypes } from '@/constants/btnTypes'
import { ClearHistoryCommand } from '@/utils/commands'
import Dropdown from '@/components/Dropdown'
import {
  StyledSettings,
  SettingsTitle,
  StyledButton,
} from './components'
import { useDispatch } from 'react-redux'
import { clearAllHistory } from '@/actions/history.actions'

const Settings = () => {
  const dispatch = useDispatch()
  return (
    <StyledSettings>
      <SettingsTitle>Settings</SettingsTitle>
      <Dropdown />
      <StyledButton
        onClick={() => dispatch(clearAllHistory())}>
        Clear All History
      </StyledButton>
    </StyledSettings>
  )
}

export default Settings
