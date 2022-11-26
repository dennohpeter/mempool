import { Wallet, providers } from 'ethers'
import { config } from '../config'
class Mempool {
  private provider: providers.JsonRpcProvider
  private signer: Wallet

  constructor() {
    // init some variables i.e provider, signer, interface, interface
    this.provider = new providers.JsonRpcProvider(config.JSON_RPC_URL)
    this.signer = new Wallet(config.PRIVATE_KEY, this.provider)
  }

  /**
   *  Monitor mempool for transactions
   */
  monitor = async () => {
    // implement mempool monitoring
    let wsProvider = new providers.WebSocketProvider(config.WSS_URL)
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

  #process = async (receipt: providers.TransactionResponse) => {
    let {
      value: targetAmountInWei,
      to: router,
      gasPrice: targetGasPriceInWei,
      gasLimit: targetGasLimit,
      hash: targetHash,
      from: targetFrom,
      data,
    } = receipt

    console.info({ receipt })
  }
}

export const mempool = new Mempool()
