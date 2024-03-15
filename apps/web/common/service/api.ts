export class ApiService {
  private BASE_URL: string | undefined
  private SOURCE: string | undefined

  constructor(source: "main" | "coinapi" = "main") {
    this.SOURCE = source
    if (source === "main") {
      this.BASE_URL = process.env.API_URL
    } else if (source === "coinapi") {
      this.BASE_URL = process.env.COINAPI_URL
    } else {
      this.BASE_URL = process.env.API_URL
    }
  }

  private constructOptions(removeContentType = false) {
    const headers = {
      ...(!removeContentType && {
        "Content-Type": "application/json",
      }),
      ...(this.SOURCE === "coinapi" && {
        "X-CoinAPI-Key": process.env.COINAPI_KEY,
      }),
    } as Record<string, any>
    const options = {
      headers,
      credentials: "include" as RequestCredentials,
    }
    return options
  }

  async get(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ) {
    const reqParams = new URLSearchParams(params).toString()
    const otherOptions = this.constructOptions()
    const res = fetch(
      `${this.BASE_URL}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        ...otherOptions,
        ...(signal ? { signal } : {}),
      }
    )
    return (await res).json()
  }

  async post(
    endpoint: string,
    body: any,
    raw?: boolean,
    removeContentType?: boolean
  ) {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "POST",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }

  async patch(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ) {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "PATCH",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }

  async delete(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ) {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "DELETE",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }
}
