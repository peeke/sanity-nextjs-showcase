import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'
import HamburgerIcon from 'components/icons/Hamburger'
import styles from './Header.css'

export default function Header({ title = 'Missing title', navItems, logo }) {
  const router = useRouter()
  const [showNav, setShowNav] = React.useState(false)

  React.useEffect(() => {
    router.events.on('routeChangeComplete', hideMenu)
    return () => router.events.off('routeChangeComplete', hideMenu)

    function hideMenu() {
      setShowNav(false)
    }
  }, [])

  return (
    <header className={styles.root} data-show-nav={showNav}>
      <strong className={styles.branding}>
        <Link href="/" as="/">
          <a title={title}>
            <Logo logo={logo} />
          </a>
        </Link>
      </strong>
      <nav className={styles.nav}>
        <NavItems items={navItems} />
        <button
          className={styles.showNavButton}
          onClick={() => setShowNav(!showNav)}
        >
          <HamburgerIcon className={styles.hamburgerIcon} />
        </button>
      </nav>
    </header>
  )
}

function NavItems({ items }) {
  if (!items) return null
  const router = useRouter()

  return (
    <ul className={styles.navItems}>
      {items.map(({ slug, title, _id }) => {
        const isActive =
          router.pathname === '/[page]' && router.query.slug === slug.current
        return (
          <li key={_id} className={styles.navItem}>
            <Link href="/[page]" as={`/${slug.current}`}>
              <a data-is-active={String(isActive)}>{title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function Logo({ logo }) {
  if (!logo || !logo.asset) {
    return null
  }

  if (logo.asset.extension === 'svg') {
    return <SVG src={logo.asset.url} className={styles.logo} />
  }

  return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
}
