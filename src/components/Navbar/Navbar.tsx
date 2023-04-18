import { HStack, Image} from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import ColorModeSwitch from './../colorModeSwitch';
import SearchBar from "../SearchBar";

interface Props{
  onSearch: (searchText : string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack padding={'5px 8px'}>
        <Image src={logo} boxSize={'60px'}/>
        <SearchBar onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar