import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green300',
  borderRadius: '$md',
  height: '$4',
})

export function App() {
  return <Button>Helloo</Button>
}
