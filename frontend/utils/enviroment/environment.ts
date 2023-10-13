export class Environment {
  private apiUrl?: string = process.env.NEXT_PUBLIC_API_URL
  private apiPort?: string = process.env.NEXT_PUBLIC_API_PORT
  private nodeEnv?: string = process.env.NODE_ENV

  constructor() {}

  getApiUrl() {
    return this.apiUrl
  }

  getApiPort() {
    return this.apiPort
  }

  getApiUrlPort() {
    if (this.nodeEnv === "development") {
      return `http://${this.apiUrl}:${this.apiPort}`
    } else {
      return `https:${this.apiUrl}:${this.apiPort}`
    }
  }
}
