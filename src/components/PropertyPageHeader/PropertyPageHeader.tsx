// Styles
import styles from './PropertyPageHeader.module.scss'

// Components
import Button from '../Button'

interface PropertyPageHeaderProps {
  address: {
    line_1: string
    line_2: string
    city: string
    state: string
    country: string
    postal_code: string
  }
}

const PropertyPageHeader = (props: PropertyPageHeaderProps) => {
  return (
    <div className={styles.base}>
      <div className={styles.image}></div>
      <div>
        <h1 className={styles.title}>{props.address.line_1}</h1>
        <p className={styles.subtitle}>
          {props.address.line_2 && props.address.line_2 + ', '}
          {props.address.city}, {props.address.state}{' '}
          {props.address.postal_code}
        </p>

        <p>Status: Vacant</p>

        <Button.Container justify="start">
          <Button>Add Maintenance Task</Button>
          <Button>Upload a Document</Button>
        </Button.Container>
      </div>
    </div>
  )
}

export default PropertyPageHeader
