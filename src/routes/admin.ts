import { Router, Request, Response } from 'express'
import { prisma } from '../lib/prisma'
import { requireAuth } from '../middleware/auth'
import { enqueueWebsiteGen } from '../queues/queues'

const router = Router()

router.use(requireAuth)

/**
 * POST /api/admin/backfill-websites?threshold=60
 * Enqueues website generation for all businesses scored below `threshold`
 * that don't already have a GeneratedWebsite record.
 */
router.post('/backfill-websites', async (req: Request, res: Response) => {
  const threshold = parseInt((req.query['threshold'] as string) ?? '60')

  const targets = await prisma.business.findMany({
    where: {
      presenceScore: { total: { lt: threshold } },
      websiteGen: null,
    },
    select: { id: true, name: true },
  })

  if (targets.length === 0) {
    res.json({ enqueued: 0, message: 'No eligible businesses found.' })
    return
  }

  const results: { id: string; name: string; status: string }[] = []

  for (const biz of targets) {
    try {
      await enqueueWebsiteGen({ businessId: biz.id })
      results.push({ id: biz.id, name: biz.name, status: 'queued' })
    } catch (err) {
      results.push({ id: biz.id, name: biz.name, status: `failed: ${(err as Error).message}` })
    }
  }

  const queued = results.filter((r) => r.status === 'queued').length
  res.json({ enqueued: queued, total: targets.length, threshold, results })
})

export default router
