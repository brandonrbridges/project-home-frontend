// Styles
import Image from 'next/image'
import styles from './HomepageImageBlock.module.scss'

// Assets
import preview from '@/assets/dashboard/app_preview.webp'
import Button from '../Button'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const HomepageImageBlock = () => {
  return (
    <div className={styles.base}>
      <div className={styles.image}>
        <Image
          src={preview}
          alt="Hello Home App preview"
          fill
        />
      </div>

      <Button
        icon={<IconArrowNarrowRight />}
        className={styles.button}
      >
        Get started
      </Button>
    </div>
  )
}

export default HomepageImageBlock
