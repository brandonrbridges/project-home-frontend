// Next
import Link from 'next/link'

// Components
import Card from '@/components/Card'
import DashboardPageHeader from '@/components/DashboardPageHeader'
import NewPropertyForm from '@/components/NewPropertyForm'
import PropertiesList from '@/components/PropertiesList'

export default function DashboardPropertiesPage() {
  return (
    <>
      <DashboardPageHeader title="Properties" />

      <Card>
        <Card.Title>Add New Property</Card.Title>
        <Card.Body>
          <NewPropertyForm />
        </Card.Body>
      </Card>

      <PropertiesList />
    </>
  )
}
