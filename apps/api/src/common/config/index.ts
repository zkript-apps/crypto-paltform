import path from "path"
import dotenv from "dotenv"

dotenv.config({ path: path.join(__dirname, "../../../../../.env") })

export const port = process.env.API_PORT || 9000
export const origins = process.env.API_ORIGINS?.split(
  ","
) as unknown as string[]
export const webUrl = process.env.WEB_URL || ""
export const apiUrl = process.env.API_URL || ""
export const mongoURL = process.env.MONGO_URL || ""
