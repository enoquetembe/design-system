import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@enoque/react'

export default {
  title: 'Typography/Heading',
  tags: ['autodocs'],
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading 1',
    as: 'h1',
  },

  parameters: {
    docs: {
      description: {
        story: 'Por',
      },
    },
  },
}
