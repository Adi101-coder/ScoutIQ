require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const p = new PrismaClient()

const TARGET_ID = process.argv[2] ?? '7fdc598d-82db-4d82-8c0b-089764d3c037'

async function main() {
  const site = await p.generatedWebsite.findUnique({
    where: { businessId: TARGET_ID },
    select: {
      businessId: true,
      status: true,
      expiresAt: true,
      siteUrl: true,
      qrUrl: true,
      templateUrl: true,
      deletedAt: true,
      firstViewAt: true,
    },
  })

  console.log('--- Target site ---')
  console.log(site ? site : `NO GeneratedWebsite record for ${TARGET_ID}`)

  const grouped = await p.generatedWebsite.groupBy({
    by: ['status'],
    _count: { _all: true },
  })
  console.log('\n--- All sites by status ---')
  grouped.forEach((g) => console.log(`${g.status}: ${g._count._all}`))
}

main()
  .catch((e) => console.error(e))
  .finally(() => p.$disconnect())
