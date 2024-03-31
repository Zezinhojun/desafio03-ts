import { login, verifyEmail, verifyPassword } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'

    it('Deve liberar o acesso, poís a senha e o email está correta', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await verifyEmail('email@invalido.com')
        expect(response).toBeFalsy()
    })


    it('Deve exibir um erro caso a senha seja inválida', async () => {
        const response = await verifyPassword('senha')
        expect(response).toBeFalsy()
    })

    // it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
    //     const response = await verifyEmail(mockEmail)
    //     expect(response).toBeTruthy()
    // })

    // it('Deve liberar o login, poís a senha está correta', async () => {
    //     const response = await verifyPassword(mockPassword)
    //     expect(response).toBeTruthy()
    // })

})