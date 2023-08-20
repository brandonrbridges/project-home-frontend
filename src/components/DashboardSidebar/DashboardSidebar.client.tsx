'use client'

// React
import { useState } from 'react'

// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Styles
import styles from './DashboardSidebar.module.scss'

// Packages
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

// Icons
import {
  IconBuilding,
  IconChartBar,
  IconChevronDown,
  IconChevronUp,
  IconDashboard,
  IconIdBadge2,
  IconUsers,
  IconWashDry2,
} from '@tabler/icons-react'

export const Navigation = () => {
  const pathname = usePathname()

  const links = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      name: 'Properties',
      path: '/dashboard/properties',
      icon: <IconBuilding />,
    },
    {
      name: 'Tenants',
      path: '/dashboard/tenants',
      icon: <IconUsers />,
    },
    {
      name: 'Reports',
      path: '/dashboard/reports',
      icon: <IconChartBar />,
    },
    {
      name: 'Services',
      path: '/dashboard/services',
      icon: <IconWashDry2 />,
    },
    {
      name: 'Subcontractors',
      path: '/dashboard/subcontractors',
      icon: <IconIdBadge2 />,
    },
  ]

  return (
    <div className={styles.navigation}>
      <ul>
        {links.map((link, index) => {
          const active = pathname === link.path

          return (
            <Link
              href={link.path}
              key={index}
            >
              <li
                className={classNames({
                  [styles.active]: active,
                })}
              >
                {link.icon && <span className={styles.icon}>{link.icon}</span>}
                {link.name}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export const Panel = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const togglePanel = () => setIsExpanded((state) => !state)

  const variants = {
    expanded: {
      height: '300px',
    },
    collapsed: {
      height: '0',
    },
  }

  const currentVariant = isExpanded ? 'expanded' : 'collapsed'

  return (
    <motion.div
      className={classNames(styles.panel, {
        [styles.expanded]: isExpanded,
      })}
      variants={variants}
      animate={currentVariant}
      initial={false}
    >
      <button
        onClick={togglePanel}
        className={styles.toggle}
      >
        {isExpanded ? <IconChevronDown /> : <IconChevronUp />}
        <span>Panel</span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Panel Content</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
