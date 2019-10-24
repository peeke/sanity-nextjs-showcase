import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SimpleBlockContent from 'components/SimpleBlockContent'
import styles from './Footer.css'

function Footer ({navItems, text, router}) {
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map(item => {
              const isActive =
                router.pathname === '/[page]' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link href='[page]' as={`/${item.slug.current}`}>
                    <a data-is-active={isActive ? 'true' : 'false'}>{item.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

export default withRouter(Footer)
