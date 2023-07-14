import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonPros } from '@enoque/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonPros>

export const Primary: StoryObj<ButtonPros> = {}

export const Big: StoryObj<ButtonPros> = {
  args: {
    size: 'big',
  },
}
