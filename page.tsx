import { CoinTable } from '@/components/coin-table'

export const revalidate = 60 // ISR: refresh server-rendered data every 60s

export default async function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const currency = (searchParams.currency as string) || 'usd'
  const page = parseInt((searchParams.page as string) || '1')
  const perPage = 100

  // Proxy through our API route to avoid CORS and centralize params
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/coingecko`)
  url.searchParams.set('vs_currency', currency)
  url.searchParams.set('order', 'market_cap_desc')
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('page', String(page))
  url.searchParams.set('sparkline', 'true')
  url.searchParams.set('price_change_percentage', '1h,24h,7d')

  const res = await fetch(url.toString(), { next: { revalidate } })
  if (!res.ok) throw new Error('Failed to fetch data')
  const coins = await res.json()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Top Cryptocurrencies</h1>
      <CoinTable coins={coins} currency={currency} page={page} perPage={perPage} />
    </div>
  )
}
