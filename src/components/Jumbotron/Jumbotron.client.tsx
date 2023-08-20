'use client'

// Styles
import styles from './Jumbotron.module.scss'

// Components
import Chip from '../Chip'

// Packages
import classNames from 'classnames'
import { motion } from 'framer-motion'

export const Testimonials = () => {
  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  }

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }

  return (
    <motion.div
      className={styles.testimonials}
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={classNames(styles.testimonial, styles.testimonial1)}
        variants={childVariant}
      >
        <div className={styles.content}>
          <Chip variant="emerald">Perfect</Chip>
          <p className={styles.quote}>Amazing work! Well done.</p>
        </div>
        <div className={styles.avatar}></div>
      </motion.div>

      <motion.div
        className={classNames(styles.testimonial, styles.testimonial2)}
        variants={childVariant}
      >
        <div className={styles.content}>
          <Chip variant="emerald">Perfect</Chip>
          <p className={styles.quote}>
            This accelerated my business massively! Thank you.
          </p>
        </div>
        <div className={styles.avatar}></div>
      </motion.div>

      <motion.div
        className={classNames(styles.testimonial, styles.testimonial3)}
        variants={childVariant}
      >
        <div className={styles.content}>
          <Chip variant="emerald">Perfect</Chip>
          <p className={styles.quote}>This is made me enjoy my job again.</p>
        </div>
        <div className={styles.avatar}></div>
      </motion.div>

      <motion.div
        className={classNames(styles.testimonial, styles.testimonial4)}
        variants={childVariant}
      >
        <div className={styles.content}>
          <Chip variant="emerald">Perfect</Chip>
          <p className={styles.quote}>This is made me enjoy my job again.</p>
        </div>
        <div className={styles.avatar}></div>
      </motion.div>
    </motion.div>
  )
}
