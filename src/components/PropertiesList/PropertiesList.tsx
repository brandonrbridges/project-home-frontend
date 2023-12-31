// Styles
import styles from './PropertiesList.module.scss'

// Client Components
import { List } from './PropertiesList.client'

const PropertiesList = () => {
  return (
    <div className={styles.base}>
      <div className={styles.list}>
        <List />
      </div>
    </div>
  )
}

export default PropertiesList
