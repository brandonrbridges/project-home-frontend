'use client'

// React
import { useEffect, useState } from 'react'

// Zustand
import { useApp } from '@/lib/store'

// Helpers
import { fetcher } from '@/helpers/api'

// Styles
import styles from './PropertiesList.module.scss'
import Link from 'next/link'

export const List = () => {
  const { auth: user } = useApp()

  const [properties, setProperties] = useState<[]>([])

  useEffect(() => {
    const fetchProperties = async () => {
      const response = (await fetcher.GET('/properties')) as []

      setProperties(response)
    }

    fetchProperties()
  }, [])

  return properties.map((property: any) => (
    <Link
      href={`/dashboard/properties/${property._id}`}
      key={property._id}
    >
      <div
        key={property._id}
        className={styles.list_item}
      >
        <p>
          {property.address.line_1}, {property.address.postal_code}
        </p>
        <p>{property.owner.name.first + ' ' + property.owner.name.last}</p>
      </div>
    </Link>
  ))
}
