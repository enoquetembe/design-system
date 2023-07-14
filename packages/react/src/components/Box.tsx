import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',
  color: '$white',

  padding: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box>
