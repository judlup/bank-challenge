import { Environment } from "../../utils/enviroment/environment"
import HttpClient from "../../utils/httpClient/httpClient"

export class AccountService {
  private http: HttpClient
  private environment: Environment
  constructor() {
    this.environment = new Environment()
    this.http = new HttpClient(this.environment.getApiUrlPort())
  }

  async getBalanceByAccountNumber(accountNumber: number): Promise<number> {
    try {
      return await this.http.get(`/account/${accountNumber}/balance`)
    } catch (error) {
      alert("The account number is invalid")
      return 0
    }
  }
}
