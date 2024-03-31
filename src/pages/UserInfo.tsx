import { Box, Center, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"

export const UserInfo = () => {
    const { email, password } = useContext(AppContext)
    return (
        <>
            <Box padding={'0 5rem'}>
                <Center border={'2px solid white'}>
                    <Text color={'blue'} margin={'0rem 3rem '}>Email: {email}<br /> Senha: {password}</Text>
                </Center>
            </Box>
        </>
    )
}