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
    movementCurrentPage: 1,
    movementLimitPerPage: 20,
    movementTotalPages: 0,
    movementHasNextPage: false,
    movementHasPrevPage: false,
    movementTotal: 0,
    movements: [],
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
    setMovementCurrentPage: (page) => set({ movementCurrentPage: page }),
    setMovementLimitPerPage: (limit) => set({ movementLimitPerPage: limit }),
    setMovementTotalPages: (totalPages) =>
      set({ movementTotalPages: totalPages }),
    setMovementHasNextPage: (hasNextPage) =>
      set({ movementHasNextPage: hasNextPage }),
    setMovementHasPrevPage: (hasPrevPage) =>
      set({ movementHasPrevPage: hasPrevPage }),
    setMovementTotal: (total) => set({ movementTotal: total }),
    setMovements: (movements) => set({ movements }),
  }),
  {
    name: "auth",
  }
)

const useAuthStore = create(store)

export default useAuthStore
