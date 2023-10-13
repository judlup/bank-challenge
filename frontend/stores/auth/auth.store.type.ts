import { UserInterface } from "../../models/user/user.interface"

export type AuthStoreType = {
  isAuthenticated: boolean
  token: string | null
  user: UserInterface | null
  balance: number | null
  signin: (token: string, user: UserInterface) => void
  getBalaceByAccountNumber: (accountNumber: number) => void
  logout: () => void
}
