import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  cursor: 'pointer',
  overflow: 'hidden',

  backgroundColor: '$gray900',

  boxSizing: 'border-box',
  width: '$6',
  height: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$xs',
  border: '2px solid $gray900',

  lineHeight: 0,

  '&:focus, &[data-state="checked"]': {
    //border: '2px solid $gray300',
    border: '2px solid $blue500',
  },

  '&[data-state="checked"]': {
    //backgroundColor: '$green300',
    backgroundColor: '$blue500',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: '$white',

  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
