import {
  JsonRpcProvider,
  TransactionResponse,
  Wallet,
  WebSocketProvider,
} from 'ethers'
import { config } from '../config'

class Mempool {
  constructor(public provider = new JsonRpcProvider(config.JSON_RPC_URL)) {}

  /**
   *  Monitor mempool for transactions
   */
  monitor = async () => {
    // implement mempool monitoring
    let wsProvider = new WebSocketProvider(config.WSS_URL)
    wsProvider.on('pending', async (hash) => {
      try {
        let receipt = await wsProvider.getTransaction(hash)
        receipt && this.#process(receipt)
      } catch (error) {
        console.error(error)
      }
    })
  }

  /**
   * Process transactions
   * @note: this is where the magic happens
   * @param receipt - transaction receipt
   */
  #process = async (receipt: TransactionResponse) => {
    // console.info(`Processing tx: ${receipt.hash}`, start)

    console.info(receipt)
  }
}

export const mempool = new Mempool()
