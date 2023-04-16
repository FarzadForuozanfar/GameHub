import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const colorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'}onChange={toggleColorMode}/>
        <Text>dark</Text>
    </HStack>
  )
}

export default colorModeSwitch