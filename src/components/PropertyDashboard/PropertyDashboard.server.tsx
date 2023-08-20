// Next
import Link from 'next/link'

// Styles
import styles from './PropertyDashboard.module.scss'

// Icons
import { IconPaperclip } from '@tabler/icons-react'

interface DocumentProps {
  title: string
  meta: string
}

export const DocumentList = () => {
  const Document = (props: DocumentProps) => {
    return (
      <div className={styles.document}>
        <div className={styles.icon}>
          <IconPaperclip />
        </div>
        <div className={styles.details}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.meta}>{props.meta}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.document_list}>
      <Link
        href="https://www.gov.uk/government/publications/how-to-rent"
        target="_blank"
      >
        <Document
          title="How to Rent Guide"
          meta="Online Publication"
        />
      </Link>
    </div>
  )
}
