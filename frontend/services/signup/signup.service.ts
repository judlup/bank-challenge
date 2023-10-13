import { SignupResponse } from "../../models/signup/signupResponse"
import { UserInterface } from "../../models/user/user.interface"
import { Environment } from "../../utils/enviroment/environment"
import HttpClient from "../../utils/httpClient/httpClient"

export class SignupService {
  private http: HttpClient
  private environment: Environment
  constructor() {
    this.environment = new Environment()
    this.http = new HttpClient(this.environment.getApiUrlPort())
  }

  async signup(user: UserInterface): Promise<SignupResponse | void> {
    try {
      return await this.http.post(`/user/register`, user)
    } catch (error) {
      alert("An error occurred while trying to signup")
    }
  }
}
