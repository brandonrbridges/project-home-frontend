// Styles
import styles from './MaintenanceGrid.module.scss'

// Server Components
import { Column } from './MaintenanceGrid.server'

// Components
import MaintenanceCard from '../MaintenanceCard'

const MaintenanceGrid = () => {
  return (
    <div className={styles.base}>
      <Column title="Pending">
        <MaintenanceCard />
        <MaintenanceCard />
      </Column>
      <Column title="Assigned">
        <MaintenanceCard />
      </Column>
      <Column title="Completed">
        <MaintenanceCard />
        <MaintenanceCard />
        <MaintenanceCard />
      </Column>
    </div>
  )
}

export default MaintenanceGrid
