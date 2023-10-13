import { SigninResponse } from "../../models/signin/signinResponse"
import { Environment } from "../../utils/enviroment/environment"
import HttpClient from "../../utils/httpClient/httpClient"

export class SigninService {
  private http: HttpClient
  private environment: Environment
  constructor() {
    this.environment = new Environment()
    this.http = new HttpClient(this.environment.getApiUrlPort())
  }

  async signin(
    email: string,
    password: string
  ): Promise<SigninResponse | void> {
    try {
      return await this.http.post(`/login`, {
        email,
        password,
      })
    } catch (error) {
      alert("The email or password is incorrect")
    }
  }
}
