import {
  CalculateCommand,
  AppendCharacterCommand,
  ClearEntryCommand,
  ChangeSignCommand,
  ClearHistoryCommand,
  ClearAllCommand,
  BackspaceCommand,
} from '@/utils/commands'

export const btnTypes = [
  {
    type: 'operator',
    label: 'C',
    command: ClearEntryCommand,
  },
  {
    type: 'digit',
    label: '7',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '8',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '9',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: '*',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: '-',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '4',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '5',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '6',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: '/',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: '+',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '1',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '2',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '3',
    command: AppendCharacterCommand,
  },
  {
    type: 'calculate',
    label: '=',
    command: CalculateCommand,
  },
  {
    type: 'digit',
    label: '.',
    command: AppendCharacterCommand,
  },
  {
    type: 'bracket',
    label: '(',
    command: AppendCharacterCommand,
  },
  {
    type: 'digit',
    label: '0',
    command: AppendCharacterCommand,
  },
  {
    type: 'bracket',
    label: ')',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: '%',
    command: AppendCharacterCommand,
  },
  {
    type: 'operator',
    label: 'CA',
    command: ClearAllCommand,
  },
  {
    type: 'sign',
    label: '+/-',
    command: AppendCharacterCommand,
  },
  {
    type: 'backspace',
    label: '\u27F5',
    command: BackspaceCommand,
  },
]
