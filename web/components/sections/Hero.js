import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import SimpleBlockContent from 'components/SimpleBlockContent'
import Button from 'components/Button'
import styles from './Hero.css'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero({ heading, backgroundImage, tagline, ctas }) {
  const style = backgroundImage
    ? {
        backgroundImage: backgroundImage
          ? `url("${urlFor(backgroundImage)
              .width(2000)
              .auto('format')
              .url()}")`
          : ''
      }
    : {}

  return (
    <div className={styles.component} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>
          {tagline && <SimpleBlockContent blocks={tagline} />}
        </div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Button {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
