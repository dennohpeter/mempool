import 'dotenv/config'

if (!process.env.WSS_URL && !process.env.JSON_RPC_URL) {
  throw new Error(
    'WSS_URL && JSON_RPC_URL is not defined and must be set in the .env file',
  )
}

export const config = {
  /**
   * @description JSON RPC endpoint
   * @type {string}
   */
  JSON_RPC_URL: process.env.JSON_RPC_URL!,

  /**
   * @description WSS_URL is the websocket endpoint of the WSS  endpoint
   * @type {string}
   */
  WSS_URL: process.env.WSS_URL!,
}
