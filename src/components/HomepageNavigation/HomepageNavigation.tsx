// Next
import Link from 'next/link'

// Styles
import styles from './HomepageNavigation.module.scss'

// Components
import Button from '../Button'
import Image from 'next/image'

// Assets
import Logo from '@/assets/logo_icon_text.svg'

const HomepageNavigation = () => {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt="Hello Home Logo"
              fill
            />
          </div>
        </Link>
        <div className={styles.links}>
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Resources</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.action}>
          <Button href="/dashboard">Start your Free Trial&nbsp;&nbsp;🚀</Button>
        </div>
      </div>
    </div>
  )
}

export default HomepageNavigation
