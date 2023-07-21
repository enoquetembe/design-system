import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@enoque-ui/react'

export default {
  title: 'Typography/Heading',
  tags: ['autodocs'],
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom Title',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
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
