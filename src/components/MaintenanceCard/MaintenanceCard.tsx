// Styles
import styles from './MaintenanceCard.module.scss'

// Icons
import { IconGripVertical } from '@tabler/icons-react'

// Assets
import placeholder from '@/assets/placeholder.svg'
import Image from 'next/image'
import Chip from '../Chip'

const MaintenanceCard = () => {
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        <button className={styles.handle}>
          <IconGripVertical />
        </button>
        <div className={styles.details}>
          <p className={styles.code}>E/3414</p>
          <p className={styles.category}>Electricity</p>
        </div>
        <Chip
          size="sm"
          variant="emerald"
          className={styles.status_chip}
        >
          Normal
        </Chip>
      </div>

      <div className={styles.location}>
        <p className={styles.title}>Location</p>
        <p className={styles.address}>1234 Main St</p>
      </div>

      <div className={styles.description}>
        <p>
          The lights in the hallway leading to my apartment are not working
          properly. It has become quite dark and inconvenient to navigate
          through the a...
        </p>
      </div>

      <div className={styles.users}>
        <div className={styles.author}>
          <div className={styles.avatar} />
          <div className={styles.details}>
            <p className={styles.title}>Reported By</p>
            <p className={styles.name}>John Doe</p>
          </div>
        </div>
        <div className={styles.assigned}>
          <div className={styles.avatar} />
          <div className={styles.details}>
            <p className={styles.title}>Assigned To</p>
            <p className={styles.name}>John Doe</p>
          </div>
        </div>
      </div>

      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            src={placeholder}
            alt="Placeholder Image"
            fill
          />
        </div>
        <div className={styles.image}>
          <Image
            src={placeholder}
            alt="Placeholder Image"
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default MaintenanceCard
