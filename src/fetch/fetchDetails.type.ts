
export interface TripDetails {
  id: string
  title: string
  description: string
  img: Img
  rating: number
  how_long: HowLong
  emission: Emission
  country_include: string[]
  overview: Overview[]
}

export interface Img {
  src: string
  atl: string
}

export interface HowLong {
  value: number
  unit: string
}

export interface Emission {
  value: number
  unit: string
}

export interface Overview {
  title: string
  description: string
  icon: string
}

export interface Headers {
  "content-length": string
  "content-type": string
}

export interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  url: string
  method: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface Env {}

export interface Headers2 {
  Accept: string
}

export interface Request {}