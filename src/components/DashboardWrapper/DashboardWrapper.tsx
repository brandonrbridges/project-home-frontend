// Styles
import styles from './DashboardWrapper.module.scss'

// Components
import DashboardFooter from '../DashboardFooter'
import DashboardNavigation from '../DashboardNavigation'
import DashboardSidebar from '../DashboardSidebar'
import ErrorBoundary from '../ErrorBoundary'
import PageHeightWrapper from '../PageHeightWrapper'

interface DashboardWrapperProps {
  children: React.ReactNode
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  return (
    <PageHeightWrapper className={styles.base}>
      <DashboardNavigation />
      <main>
        <DashboardSidebar />

        <div className={styles.content}>{props.children}</div>

        <div id="sidepanel-portal" />
      </main>
      <DashboardFooter />
    </PageHeightWrapper>
  )
}

export default DashboardWrapper
