// Styles
import styles from './DashboardSidebar.module.scss'

// Client Components
import { Navigation, Panel } from './DashboardSidebar.client'

const DashboardSidebar = () => {
  return (
    <div className={styles.base}>
      <Navigation />

      <Panel />
    </div>
  )
}

export default DashboardSidebar
