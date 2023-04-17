import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props{
    onSeletePlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({onSeletePlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms();
    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            {selectedPlatform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
            {data.map(paltform => <MenuItem onClick={() => onSeletePlatform(paltform)} key={paltform.id}>{paltform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector