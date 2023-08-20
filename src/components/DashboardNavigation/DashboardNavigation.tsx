// Next
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './DashboardNavigation.module.scss'

// Client Components
import { Navigation, User, UserLinks } from './DashboardNavigation.client'

// Assets
import logo from '@/assets/logo_icon.svg'

const DashboardNavigation = () => {
  return (
    <div className={styles.base}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Hello Home Logo"
            fill
          />
        </div>

        <Navigation />
      </div>

      <div className={styles.right}>
        <UserLinks />

        <User />
      </div>
    </div>
  )
}

export default DashboardNavigation
