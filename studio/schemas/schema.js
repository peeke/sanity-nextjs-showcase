// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import siteConfig from './documents/siteConfig'

// Object types
import pageSettings from './objects/parts/pageSettings'
import cta from './objects/parts/cta'
import internalLink from './objects/parts/internalLink'
import link from './objects/parts/link'
import portableText from './objects/parts/portableText'
import simplePortableText from './objects/parts/simplePortableText'
import embedHTML from './objects/components/embedHTML'
import figure from './objects/components/figure'
import hero from './objects/components/hero'
import imageSection from './objects/sections/imageSection'
import textSection from './objects/sections/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    page,
    pageSettings,
    portableText,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
