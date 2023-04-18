import {Badge} from '@chakra-ui/react'

interface Props {
    score: number;
}
const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 55 ? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize={'15px'} paddingX={'7px'} borderRadius={'5px'}>{score}</Badge>
  )
}

export default CriticScore