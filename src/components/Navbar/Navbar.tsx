import { HStack, Image} from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import ColorModeSwitch from './../colorModeSwitch';
import SearchBar from "../SearchBar";
const Navbar = () => {
  return (
    <HStack padding={'5px 8px'}>
        <Image src={logo} boxSize={'60px'}/>
        <SearchBar />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar