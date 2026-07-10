import 'dotenv/config'
import '../config/env'
import http from 'http'
import { registerWorkers } from './registerWorkers'
import { stopBoss } from '../lib/jobQueue'

// Render Web Service requires an open port — this satisfies that check
// while the actual worker logic runs via registerWorkers().
// Locally, WORKER_PORT (4001) keeps this off the API's PORT (4000) when both
// run together (e.g. `npm run dev:full`). On Render this is a separate service,
// so when WORKER_PORT isn't set we bind the platform-provided PORT that Render
// actually scans — otherwise the deploy fails with a port-scan timeout.
const PORT = parseInt(process.env.WORKER_PORT ?? process.env.PORT ?? '4001')
const server = http.createServer((_req, res) => {
  res.writeHead(200)
  res.end('workers ok')
})
server.listen(PORT, () => {
  console.log(`[Workers] Health server listening on port ${PORT}`)
})

registerWorkers().catch((err) => {
  console.error('[Workers] Failed to start:', err)
  process.exit(1)
})

let shuttingDown = false
async function shutdown(signal: string): Promise<void> {
  if (shuttingDown) return
  shuttingDown = true
  console.log(`[Workers] ${signal} received — shutting down gracefully...`)
  server.close()
  await stopBoss()
  process.exit(0)
}

process.on('SIGTERM', () => void shutdown('SIGTERM'))
process.on('SIGINT', () => void shutdown('SIGINT'))

process.on('uncaughtException', (err) => {
  console.error('[Workers] Uncaught exception:', err)
})

process.on('unhandledRejection', (reason) => {
  console.error('[Workers] Unhandled rejection:', reason)
})

