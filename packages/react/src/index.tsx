import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',

  backgroundColor: '$green300',

  border: 0,
  borderRadius: '$sm',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },

      big: {
        fontSize: 14,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonPros = ComponentProps<typeof Button>
