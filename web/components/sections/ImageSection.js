import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import SimpleBlockContent from 'components/SimpleBlockContent'
import Button from 'components/Button'
import styles from './ImageSection.css'

const builder = imageUrlBuilder(client)

function ImageSection({ heading, label, text, image, cta }) {
  if (!image) return null

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className={styles.image}
          alt={heading}
        />
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <div className={styles.label}>{label}</div>
              <h2 className={styles.title}>{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && cta.route && <Button {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default ImageSection
