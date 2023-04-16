import { HStack, Image} from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import ColorModeSwitch from './../colorModeSwitch';
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={'5px 8px'}>
        <Image src={logo} boxSize={'60px'}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar