import { DepositResponse } from "../../models/transaction/depositResponse"
import { movementResponse } from "../../models/transaction/movementsResponse"
import { TransferResponse } from "../../models/transaction/transferResponse"
import { WithdrawalResponse } from "../../models/transaction/withdrawalResponse"
import { Environment } from "../../utils/enviroment/environment"
import HttpClient from "../../utils/httpClient/httpClient"

export class TransactionService {
  private http: HttpClient
  private environment: Environment
  constructor() {
    this.environment = new Environment()
    this.http = new HttpClient(this.environment.getApiUrlPort())
  }

  async deposit(
    destinationAccount: string,
    userId: string,
    amount: number
  ): Promise<DepositResponse | void> {
    try {
      const authData = JSON.parse(localStorage.getItem("auth") || "{}")
      const token = authData.state.token
      this.http.setToken(token)
      return await this.http.post(`/transaction/deposit`, {
        destinationAccount,
        userId,
        amount,
      })
    } catch (error) {
      alert("Error on deposit")
    }
  }

  async withdrawal(
    originAccount: string,
    userId: string,
    amount: number
  ): Promise<WithdrawalResponse | void> {
    try {
      const authData = JSON.parse(localStorage.getItem("auth") || "{}")
      const token = authData.state.token
      this.http.setToken(token)
      return await this.http.post(`/transaction/withdrawal`, {
        originAccount,
        userId,
        amount,
        description: "Withdrawal",
      })
    } catch (error) {
      alert("Error on deposit")
    }
  }

  async transfer(
    originAccount: string,
    destinationAccount: string,
    userId: string,
    amount: number,
    description: string
  ): Promise<TransferResponse | void> {
    try {
      const authData = JSON.parse(localStorage.getItem("auth") || "{}")
      const token = authData.state.token
      this.http.setToken(token)
      return await this.http.post(`/transaction/transfer`, {
        originAccount,
        destinationAccount,
        userId,
        amount,
        description,
      })
    } catch (error) {
      alert("Error on deposit")
    }
  }

  async movements(
    accountId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<movementResponse | void> {
    try {
      const authData = JSON.parse(localStorage.getItem("auth") || "{}")
      const token = authData.state.token
      this.http.setToken(token)
      return await this.http.get(
        `/transaction/${accountId}?page=${page}&&limit=${limit}`
      )
    } catch (error) {
      alert("Error on deposit")
    }
  }
}
