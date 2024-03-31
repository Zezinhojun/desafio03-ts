import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

    const { setIsLoggedIn, email, setEmail, password, setPassword, storage } = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(() => {
        // Verifica se já existe usuário e senha salvos no localStorage
        const userAndPassword = JSON.parse(storage);
        if (userAndPassword && userAndPassword.login) {
            // Redireciona para a página de conta se já estiver logado
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
        </Box>
    );
}

export default Home;
