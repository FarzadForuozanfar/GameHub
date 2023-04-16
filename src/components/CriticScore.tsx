import {Badge} from '@chakra-ui/react'

interface Props {
    score: number;
}
const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 55 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize={'15px'} padding={'1.5px'} borderRadius={'5px'}>{score}</Badge>
  )
}

export default CriticScore