import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@enoque/react'

export default {
  title: 'Form/Text Input',
  tags: ['autodocs'],
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'enoque.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
