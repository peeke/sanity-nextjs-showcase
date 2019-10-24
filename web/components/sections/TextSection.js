import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from 'components/SimpleBlockContent'
import styles from './TextSection.css'

function TextSection({ heading, label, text }) {
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object)
}

export default TextSection
