import { Platform } from "../hooks/useGames"
import {FaWindows, FaLinux, FaPlaystation, FaXbox, FaApple, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key:string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios:MdPhoneIphone
    }
  return (
    <HStack marginY={'8px'}>
    {platforms.map((platform) => <Icon key={platform.slug} color={'gray.500'} as={iconMap[platform.slug]} />)}
    </HStack>
  )
}

export default PlatformIconList