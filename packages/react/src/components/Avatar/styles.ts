import { styled } from '../../styles'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.AvatarImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$full',
})

export const AvatarFallback = styled(Avatar.AvatarFallback, {
  color: '$gray800',

  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    width: '$6',
    height: '$6',
  },
})
