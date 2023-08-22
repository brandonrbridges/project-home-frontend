// Styles
import styles from './PropertyDashboard.module.scss'

// Helpers
import { fetcher } from '@/helpers/api'

// Components
import Button from '../Button'
import Card from '../Card'
import TenantInviteForm from '../TenantInviteForm'

// Server Components
import { DocumentList } from './PropertyDashboard.server'

interface PropertyDashboardProps {
  data: any
}

const PropertyDashboard = async (props: PropertyDashboardProps) => {
  const tasks = await fetcher.GET('/maintenance-tasks')

  return (
    <div className={styles.base}>
      <div className={styles.column}>
        <Card>
          <Card.Title>Tenancy Overview</Card.Title>
          <Card.Body>
            <TenantInviteForm />
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Documents</Card.Title>
          <Card.Body>
            <DocumentList />
          </Card.Body>
        </Card>
      </div>
      <Card>
        <Card.Title>Maintenance</Card.Title>
        <Card.Body>{JSON.stringify(tasks)}</Card.Body>
      </Card>
      <Card>
        <Card.Title>Pending</Card.Title>
      </Card>
    </div>
  )
}

export default PropertyDashboard
