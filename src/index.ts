import { mempool } from './core'

const Main = async () => {
  console.info(`Starting...\n- - -`)

  // start mempool monitoring
  await mempool.monitor()
}

Main()
