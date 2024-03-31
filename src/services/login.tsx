import { api } from "../api"

export const verifyEmail = async (email: string): Promise<boolean> => {
    const data: any = await api

    if (email !== data.email) {
        return false
    }

    return true
}

export const verifyPassword = async (password: string): Promise<boolean> => {

    const data: any = await api
    if (password !== data.password) {
        return false
    }
    return true
}


export const login = async (email: string, password: string): Promise<boolean> => {

    if (await verifyEmail(email) && await verifyPassword(password)) {
        return true
    }
    return false
}