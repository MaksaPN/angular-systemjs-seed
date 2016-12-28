import { Env } from './env'

export const Config = {
    apiUrl: Env.current == "Development" ? "http://localhost:3916/api/" : "http://localhost:3916/api/",
}

export const RouteTable = {
    login: "login",
    dashboard: "dashboard"
}