import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  '&:disabled:hover': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  padding: '0, $4',

  minWidth: 120,
  boxSizing: 'border-box',
  borderRadius: '$sm',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        // backgroundColor: '$green500',
        backgroundColor: '$blue900',
        color: '$white',
        
        '&:not(disabled):hover': {
          //backgroundColor: '$green300',
          backgroundColor: '$blue500',
        },

        '&:disabled:hover': {
          //backgroundColor: '$gray200',
          backgroundColor: '$blue500',
        },
      },

      secondary: {
        //color: '$green300',
        color: '$blue500',
        //border: '2px solid $green500',
        border: '2px solid $blue500',

        '&:not(disabled):hover': {
           // backgroundColor: '$green500',
          backgroundColor: '$blue900',
          color: '$white',
        },

        '&:disabled:hover': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(disabled):hover': {
          color: '$white',
        },

        '&:disabled:hover': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
        padding: '0, $4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
