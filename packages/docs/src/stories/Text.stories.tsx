import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@enoque/react'

export default {
  title: 'Typography/Tex',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed ut hic maxime ab eius atque esse debitis numquam laborum blanditiis quaerat veniam, dolorem sit nisi quam tempore magnam minus!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
