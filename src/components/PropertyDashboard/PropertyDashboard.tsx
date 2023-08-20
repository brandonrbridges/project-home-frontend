// Styles
import styles from './PropertyDashboard.module.scss'

// Components
import Card from '../Card'
import TenantInviteForm from '../TenantInviteForm'
import Button from '../Button'

// Server Components
import { DocumentList } from './PropertyDashboard.server'

interface PropertyDashboardProps {
  data: any
}

const PropertyDashboard = (props: PropertyDashboardProps) => {
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
        <Card.Body>Property Dashboard</Card.Body>
      </Card>
      <Card>
        <Card.Title>Finances</Card.Title>
        <Card.Body>
          <p>
            Rent: {props.data.rent.amount && '£' + props.data.rent.amount}{' '}
            {props.data.rent.frequency}
          </p>
          <p>Deposit: {props.data.deposit && '£' + props.data.deposit}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PropertyDashboard
