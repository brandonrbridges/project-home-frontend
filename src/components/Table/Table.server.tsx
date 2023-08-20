// Styles
import styles from './Table.module.scss'

export const Row = () => {
  return (
    <div className={styles.row}>
      <div className={styles.cell}>
        <p>cell</p>
      </div>
      <div className={styles.cell}>
        <p>cell</p>
      </div>
    </div>
  )
}
