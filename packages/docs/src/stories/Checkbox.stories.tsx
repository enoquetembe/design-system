import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@enoque-ui/react'

export default {
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
