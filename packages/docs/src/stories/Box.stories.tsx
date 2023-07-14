import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@enoque/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Box Element</p>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
