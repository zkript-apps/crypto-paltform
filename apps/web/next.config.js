/** @type {import("next").NextConfig} */
const { existsSync } = require("fs")
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
})

module.exports = {
  reactStrictMode: true,
  images: {},
  env: {
    API_URL: process.env.API_URL,
    COINAPI_URL: process.env.COINAPI_URL,
    COINAPI_KEY: process.env.COINAPI_KEY,
  },
}
