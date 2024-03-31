import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'
import { UserInfo } from '../pages/UserInfo'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({
      login: false,
      user: '',
      password: ''
    })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <UserInfo />
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>

  )
}
