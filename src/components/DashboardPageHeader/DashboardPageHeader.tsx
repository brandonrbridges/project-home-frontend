// Styles
import styles from './DashboardPageHeader.module.scss'

// Components
import Form from '../Form'

interface DashboardPageHeaderProps {
  title: string
  actions?: React.ReactNode
}

const DashboardPageHeader = (props: DashboardPageHeaderProps) => {
  return (
    <div className={styles.base}>
      <h1 className={styles.title}>{props.title}</h1>
      {/*}
      <div className={styles.search}>
        <Form.TextInput id="search" />
      </div>
      */}
      {props.actions && props.actions}
    </div>
  )
}

export default DashboardPageHeader
