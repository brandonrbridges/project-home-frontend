// Link
import Link from 'next/link'

// Styles
import styles from './DashboardFooter.module.scss'

// Client Components
import { SocketStatus } from './DashboardFooter.client'

const DashboardFooter = () => {
  return (
    <div className={styles.base}>
      <div className={styles.left}>
        <Link href="/">Homepage</Link>
        <p>Current in Development</p>
      </div>
      <div className={styles.right}>
        <SocketStatus />
        <p>© {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default DashboardFooter
