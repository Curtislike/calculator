import {
  AddCommand,
  Calculate,
  AppendCharacter,
  ClearEntryCommand,
  ChangeSignCommand,
} from '@/utils/commands'

export const btnTypes = [
  {
    type: 'operation',
    label: 'C',
    command: ClearEntryCommand,
  },
  {
    type: 'digit',
    label: '7',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '8',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '9',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '*',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '-',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '4',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '5',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '6',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '/',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '+',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '1',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '2',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '3',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '=',
    command: Calculate,
  },
  {
    type: 'digit',
    label: '.',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '(',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: '0',
    command: AppendCharacter,
  },
  {
    type: 'digit',
    label: ')',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: '%',
    command: AppendCharacter,
  },
  {
    type: 'operation',
    label: 'CE',
  },
  {
    type: 'operation',
    label: 'CA',
  },
  {
    type: 'operation',
    label: 'CH',
  },
  {
    type: 'operation',
    label: 'H',
  },
  {
    type: 'operation',
    label: '+/-',
    command: ChangeSignCommand,
  },
]
