import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const siteConfigContext = React.createContext({})

export function useSiteConfig() {
  return useContext(siteConfigContext)
}

export const Provider = siteConfigContext.Provider

Provider.propTypes = {
  title: PropTypes.string,
  mainNavigation: PropTypes.arrayOf(PropTypes.object),
  footerNavigation: PropTypes.arrayOf(PropTypes.object),
  footerText: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string
    })
  }),
  url: PropTypes.string
}
