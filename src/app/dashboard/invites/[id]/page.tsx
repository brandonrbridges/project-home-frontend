// Helpers
import { fetcher } from '@/helpers/api'

// Components
import PropertyDashboard from '@/components/PropertyDashboard'
import PropertyPageHeader from '@/components/PropertyPageHeader'

// Components

export default async function DashboardInvitesPage({
  params: { id },
}: {
  params: {
    id: string
  }
}) {
  const data = (await getInvite(id)) as any

  return (
    <div className="space-y-4">
      <pre className="bg-slate-100 border border-slate-200 p-2 rounded text-xs mb-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

const getInvite = async (id: string) => {
  const response = await fetcher.GET(`/invitations/${id}`, {
    next: {
      revalidate: 0,
    },
  })

  return response
}
