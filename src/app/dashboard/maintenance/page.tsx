// Components
import Button from '@/components/Button'
import DashboardPageHeader from '@/components/DashboardPageHeader'
import MaintenanceGrid from '@/components/MaintenanceGrid'

// Icons
import { IconCirclePlus, IconFilter } from '@tabler/icons-react'

export default function DashboardMaintenancePage() {
  return (
    <>
      <DashboardPageHeader
        title="Maintenance"
        actions={
          <Button.Container>
            <Button
              variant="secondary"
              icon={<IconFilter />}
            >
              Filter
            </Button>
            <Button icon={<IconCirclePlus />}>Add</Button>
          </Button.Container>
        }
      />

      <MaintenanceGrid />
    </>
  )
}
