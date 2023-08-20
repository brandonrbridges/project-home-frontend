// Styles
import styles from './Table.module.scss'

// Server Components
import { Row } from './Table.server'

interface TableProps {}

const Table = () => {
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        <p>header</p>
      </div>
      <div className={styles.body}>
        <Row />
        <Row />
        <Row />
      </div>
      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </div>
  )
}

export default Table
