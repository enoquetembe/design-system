import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@enoque/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
