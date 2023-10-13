import axios, { AxiosInstance } from "axios"

class HttpClient {
  private http: AxiosInstance
  private token: string | null = null

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  setToken(token: string) {
    this.token = token
  }

  private getHeaders() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : undefined
  }

  async get<T = any>(path: string) {
    const response = await this.http.get<T>(path, {
      headers: this.getHeaders(),
    })
    return response.data
  }

  async post<T = any>(path: string, data?: any) {
    const response = await this.http.post<T>(path, data, {
      headers: this.getHeaders(),
    })
    return response.data
  }

  async put<T = any>(path: string, data?: any) {
    const response = await this.http.put<T>(path, data, {
      headers: this.getHeaders(),
    })
    return response.data
  }

  async delete<T = any>(path: string) {
    const response = await this.http.delete<T>(path, {
      headers: this.getHeaders(),
    })
    return response.data
  }
}

export default HttpClient
