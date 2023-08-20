// Styles
import styles from './PageHeightWrapper.module.scss'

// Helpers
import classNames from 'classnames'

interface PageHeightWrapperProps {
  children: React.ReactNode
  className?: string
}

const PageHeightWrapper = (props: PageHeightWrapperProps) => {
  return (
    <div className={classNames(styles.base, props.className)}>
      {props.children}
    </div>
  )
}

export default PageHeightWrapper
