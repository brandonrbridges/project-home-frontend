'use client'

// Next
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// Styles
import styles from './DashboardNavigation.module.scss'

// Packages
import classNames from 'classnames'
import { useApp } from '@/lib/store'
import {
  IconKey,
  IconLogout,
  IconNotification,
  IconSettings,
} from '@tabler/icons-react'

export const Navigation = () => {
  const pathname = usePathname()

  const links = [
    {
      href: '/dashboard',
      label: 'Overview',
    },
    {
      href: '/dashboard/maintenance',
      label: 'Maintenance',
    },
    {
      href: '/dashboard/rent',
      label: 'Rent',
    },
    {
      href: '/dashboard/access',
      label: 'Access',
    },
  ]

  return (
    <div className={styles.links}>
      {links.map((link, index) => {
        const active = pathname === link.href

        return (
          <Link
            key={index}
            href={link.href}
            className={classNames({
              [styles.active]: active,
            })}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export const User = () => {
  const {
    auth: { user },
  } = useApp()

  return (
    <div className={styles.user}>
      <div className={styles.avatar}></div>
      <div className={styles.details}>
        <p className={styles.name}>
          {user?.name.first} {user?.name.last}
        </p>
        {user?.role && <p className={styles.account_type}>{user.role}</p>}
      </div>
    </div>
  )
}

export const UserLinks = () => {
  const {
    auth: { user },
    logout,
  } = useApp()

  const router = useRouter()

  const handleLogout = () => {
    router.push('/login')

    setTimeout(() => logout(), 1000)
  }

  return (
    <div className={styles.links}>
      {user?.role === 'administrator' && (
        <Link href="/dashboard/administrator">
          <IconKey />
        </Link>
      )}

      <Link href="/dashboard/notifications">
        <IconNotification />
      </Link>

      <Link href="/dashboard/settings">
        <IconSettings />
      </Link>

      <button onClick={handleLogout}>
        <IconLogout />
      </button>
    </div>
  )
}
