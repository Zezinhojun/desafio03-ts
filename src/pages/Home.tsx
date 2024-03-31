import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import { conta } from "./../api"

const Home = () => {

    const { setIsLoggedIn, email, setEmail, password, setPassword, storage } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [showText, setShowText] = useState(true);
    const navigate = useNavigate()

    const showInfo = () => {
        setShow(true)
        setShowText(false);
    }

    const hideInfo = () => {
        setShow(false)
        setShowText(true);
    }

    useEffect(() => {
        const userAndPassword = JSON.parse(storage);
        if (userAndPassword && userAndPassword.login) {
            navigate('/conta/1');
        }
    }, [storage, navigate]);

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)
        if (!loggedIn) {
            return alert('Email inválido ou senha inválida!')
        }
        setIsLoggedIn(true)
        changeLocalStorage({
            login: true,
            user: email,
            password: password
        })
        navigate('/conta/1')
    }

    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
            <Center padding={'3rem'} onMouseEnter={showInfo} onMouseLeave={hideInfo} >
                {showText && <Text className="mouseHere">Mouse here</Text>}
                {show && (
                    <Box background={'transparent'}>
                        <Flex flexDir={'column'}>
                            <Text fontSize={'x-large'} color={'orange'} marginBottom={'2rem'}>Dados para teste do projeto</Text>
                            <Box>
                                <Text fontSize={'larger'} color={'blue'}>Email: {conta.email} </Text>
                                <Text fontSize={'larger'} color={'blue'}>Senha: {conta.password}</Text>
                            </Box>
                        </Flex>
                    </Box>
                )}
            </Center >
        </Box >
    );
}

export default Home;
