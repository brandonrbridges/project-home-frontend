// Styles
import styles from './MaintenanceGrid.module.scss'

interface ColumnProps {
  title: string
  children: React.ReactNode
}

export const Column = (props: ColumnProps) => {
  return (
    <div className={styles.column}>
      <p className={styles.title}>{props.title}</p>

      <div className={styles.children}>{props.children}</div>
    </div>
  )
}
