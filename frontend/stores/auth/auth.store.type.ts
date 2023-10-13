import { DepositResponse } from "../../models/transaction/depositResponse"
import { TransferResponse } from "../../models/transaction/transferResponse"
import { WithdrawalResponse } from "../../models/transaction/withdrawalResponse"
import { UserInterface } from "../../models/user/user.interface"

export type AuthStoreType = {
  isAuthenticated: boolean
  token: string | null
  user: UserInterface | null
  balance: number | null
  movementCurrentPage: number
  movementLimitPerPage: number
  movementTotalPages: number
  movementHasNextPage: boolean
  movementHasPrevPage: boolean
  movementTotal: number
  movements: DepositResponse[] | TransferResponse[] | WithdrawalResponse[]
  signin: (token: string, user: UserInterface) => void
  getBalaceByAccountNumber: (accountNumber: number) => void
  logout: () => void
  setMovementCurrentPage: (page: number) => void
  setMovementLimitPerPage: (limit: number) => void
  setMovementTotalPages: (totalPages: number) => void
  setMovementHasNextPage: (hasNextPage: boolean) => void
  setMovementHasPrevPage: (hasPrevPage: boolean) => void
  setMovementTotal: (total: number) => void
  setMovements: (
    movements: DepositResponse[] | TransferResponse[] | WithdrawalResponse[]
  ) => void
}
