import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@enoque/react'

export default {
  title: 'Form/Text Area',
  tags: ['autodocs'],
  component: TextArea,
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add Your Observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
