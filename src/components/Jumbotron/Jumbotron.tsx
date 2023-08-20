// Styles
import styles from './Jumbotron.module.scss'

// Components
import Button from '../Button'

// Client Components
import { Testimonials } from './Jumbotron.client'

// Icons
import { IconArrowNarrowRight } from '@tabler/icons-react'

const Jumbotron = () => {
  return (
    <div className={styles.base}>
      <h1 className={styles.title}>
        Superpowers for
        <br />
        <span className={styles.decorative}>Property Management</span>
      </h1>
      <p className={styles.description}>
        We provide property managers and landlords with next-generation tools
        that automate their business that are easy to use and affordable.
      </p>
      <Button.Container className={styles.buttons}>
        <Button
          href="/register"
          icon={<IconArrowNarrowRight />}
        >
          Register
        </Button>
        <Button
          href="/login"
          icon={<IconArrowNarrowRight />}
        >
          Login
        </Button>
      </Button.Container>

      <Testimonials />
    </div>
  )
}

export default Jumbotron
