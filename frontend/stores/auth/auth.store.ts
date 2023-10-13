import { create } from "zustand"
import { persist } from "zustand/middleware"
import { AccountService } from "../../services/account/account.service"
import { AuthStoreType } from "./auth.store.type"

const store = persist<AuthStoreType>(
  (set, get) => ({
    isAuthenticated: false,
    token: null,
    user: null,
    balance: 0,
    signin: (token, user) => {
      set({ isAuthenticated: true, token, user })
      get().getBalaceByAccountNumber(Number(user.phone))
    },
    logout: () => set({ isAuthenticated: false, token: null, user: null }),
    getBalaceByAccountNumber: async (accountNumber: number) => {
      const accountService = new AccountService()
      const accountBalanceResponse =
        await accountService.getBalanceByAccountNumber(accountNumber)
      set({ balance: accountBalanceResponse })
    },
  }),
  {
    name: "auth",
  }
)

const useAuthStore = create(store)

export default useAuthStore
