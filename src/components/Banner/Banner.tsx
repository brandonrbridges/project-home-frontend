// Styles
import Link from 'next/link'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <p>Learn more about our 2023 roadmap and what this means for you</p>
        <Link href="/">Learn more</Link>
      </div>
    </div>
  )
}

export default Banner
