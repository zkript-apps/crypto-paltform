import express from "express"
import cors from "cors"
import cookies from "cookie-parser"
import { port, origins } from "@/common/config"
import routes from "@/routes"

const cp = express()
cp.disable("x-powered-by")
cp.use(cookies())
cp.use(express.json())
cp.use(
  cors({
    origin: origins,
    credentials: true,
  })
)
routes(cp)
cp.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`)
})
