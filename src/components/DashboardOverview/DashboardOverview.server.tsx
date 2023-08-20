// Styles
import styles from './DashboardOverview.module.scss'

export const PaymentOverview = () => {
  return (
    <div className={styles.payment_information}>
      <div className={styles.column}>
        <p className={styles.value}>$223,600</p>
        <p className={styles.tag}>Rent</p>
      </div>
      <div className={styles.column}>
        <p className={styles.value}>$24,6840</p>
        <p className={styles.tag}>Services</p>
      </div>
      <div className={styles.column}>
        <p className={styles.value}>$31,240</p>
        <p className={styles.tag}>Maintenace</p>
      </div>
      <div className={styles.column}>
        <p className={styles.value}>$2,460</p>
        <p className={styles.tag}>Debt</p>
      </div>
    </div>
  )
}

export const MaintenanceRequests = () => {
  const Row = () => (
    <tr className={styles.row}>
      <td className={styles.column}>
        <p>P/1925</p>
      </td>
      <td className={styles.column}>
        <p>124 Main Street, NY</p>
      </td>
      <td className={styles.column}>
        <div className={styles.user}>
          <div className={styles.avatar}></div>
          <p>John Doe</p>
        </div>
      </td>
      <td className={styles.column}>
        <p>3 days ago</p>
      </td>
      <td className={styles.column}>
        <p>High</p>
      </td>
    </tr>
  )

  return (
    <table className={styles.maintenance_requests}>
      <tbody>
        <Row />
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  )
}
