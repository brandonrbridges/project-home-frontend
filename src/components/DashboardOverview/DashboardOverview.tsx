// Styles
import styles from './DashboardOverview.module.scss'

// Server Components
import {
  MaintenanceRequests,
  PaymentOverview,
} from './DashboardOverview.server'

// Components
import Card from '../Card'

// Client Components
import { ProfileCard } from './DashboardOverview.client'

const DashboardOverview = () => {
  return (
    <div className={styles.base}>
      <div className={styles.column_1}>
        <ProfileCard />
        <Card>
          <Card.Title>Your Properties</Card.Title>
        </Card>
      </div>
      <div className={styles.column_2}>
        <Card>
          <Card.Title>Payments</Card.Title>
          <Card.Body>
            <PaymentOverview />
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>New Maintenance Requests</Card.Title>
          <Card.Body>
            <MaintenanceRequests />
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Delayed Maintenance</Card.Title>
          <Card.Body>
            <MaintenanceRequests />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default DashboardOverview
