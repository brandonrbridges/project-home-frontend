// Styles
import styles from './HomepageHighlightBlock.module.scss'

const HomepageHighlightBlock = () => {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <h2 className={styles.title}>Accredited by the IPRM</h2>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </div>
    </div>
  )
}

export default HomepageHighlightBlock
