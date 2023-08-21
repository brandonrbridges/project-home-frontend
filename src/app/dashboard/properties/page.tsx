// Next
import Link from 'next/link'

// Components
import DashboardPageHeader from '@/components/DashboardPageHeader'
import NewPropertyPanelButton from '@/components/NewPropertyPanelButton'
import PropertiesList from '@/components/PropertiesList'

export default function DashboardPropertiesPage() {
  return (
    <>
      <DashboardPageHeader
        title="Properties"
        actions={<NewPropertyPanelButton />}
      />

      <PropertiesList />
    </>
  )
}
