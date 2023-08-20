// Styles
import styles from './HomepageContentBlock.module.scss'

// Components
import Button from '../Button'

// Icons
import { IconArrowNarrowRight } from '@tabler/icons-react'

const HomepageContentBlock = () => {
  return (
    <div className={styles.base}>
      <div className={styles.content_block}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Save time</span> by having
            everything on one platform
          </h2>
          <p className={styles.description}>
            We provide property managers and landlords next-generation tools to
            automate their business that are easy to use and affordable.
          </p>
          <Button icon={<IconArrowNarrowRight />}>Learn more</Button>
        </div>
        <div className={styles.image}></div>
      </div>

      <div className={styles.content_block}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Mitigate risks</span> by managing
            your properties 10x faster than before
          </h2>
          <p className={styles.description}>
            We provide property managers and landlords next-generation tools to
            automate their business that are easy to use and affordable.
          </p>
          <Button icon={<IconArrowNarrowRight />}>Learn more</Button>
        </div>
      </div>
    </div>
  )
}

export default HomepageContentBlock
