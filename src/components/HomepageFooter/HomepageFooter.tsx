// Styles
import Link from 'next/link'
import styles from './HomepageFooter.module.scss'
import { FooterForm } from './HomepageFooter.client'

const HomepageFooter = () => {
  return (
    <div className={styles.base}>
      <div className={styles.call_to_action}>
        <h2 className={styles.title}>
          Are you ready to manage your data{' '}
          <span className={styles.highlight}>10x faster</span> than before?
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          diam id tincidunt euismod, ipsum diam commodo nunc, sed consectetur
          libero nisl eget justo.
        </p>
        <FooterForm />
      </div>

      <div className={styles.content}>
        <p>footer</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            Since {new Date().getFullYear()}
          </div>
          <div className={styles.middle_column}>
            <p>
              &copy;
              {new Date().getFullYear()} Copyright by Hello Home Ltd.
            </p>
          </div>
          <div className={styles.last_column}>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageFooter
