import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  email: string,
  setEmail: (email: string) => void,
  password: string,
  setPassword: (email: string) => void,
  storage: any

}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const storage = getAllLocalStorage()

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  const user = 'nathally'

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, email, setEmail, password, setPassword, storage }}>
      {children}
    </AppContext.Provider>
  )
}
