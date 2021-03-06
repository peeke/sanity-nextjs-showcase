import React from 'react'
import BaseApp from 'next/app'
import { getConfig } from '../services/siteConfig'
import { Provider } from '../machinery/siteConfig'

import '../styles/layout.css'

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    const data = [
      getConfig(),
      Component.getInitialProps ? Component.getInitialProps(ctx) : {}
    ]

    const [config, pageProps] = await Promise.all(data)
    return { pageProps, config }
  }

  render() {
    const { Component, pageProps, config } = this.props
    return (
      <Provider value={config}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default App
