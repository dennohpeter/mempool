import 'dotenv/config'

if (
  !process.env.PRIVATE_KEY &&
  !process.env.WSS_URL &&
  !process.env.JSON_RPC_URL
) {
  throw new Error(
    'PRIVATE_KEY, WSS_URL && JSON_RPC_URL is not defined and must be set in the .env file',
  )
}

export const config = {
  /**
   * @description PRIVATE_KEY is the private key of the account that will be used to sign transactions
   */
  PRIVATE_KEY: process.env.PRIVATE_KEY!,

  /**
   * @description JSON RPC endpoint
   * @type {string}
   */
  JSON_RPC_URL: process.env.JSON_RPC_URL!,

  /**
   * @description WSS_URL is the websocket endpoint of the WSS  endpoint
   */

  WSS_URL: process.env.WSS_URL!,
}
