import React from 'react'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta (props) {
  const {title, externalLink, link} = props

  if (link && link.slug && link.slug.current) {
    return (
      <Link href='/[page]' as={`/${link.slug.current}`}>
        <a className={styles.button}>{title}</a>
      </Link>
    )
  }

  if (externalLink) {
    return (
      <a className={styles.button} href={externalLink}>
        {title}
      </a>
    )
  }

  return <a className={styles.button}>{title}</a>
}

export default cta
