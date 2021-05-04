import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const SeEnOp = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            charset
            description
            author
            locale
          }
        }
      }
    `
  )

  const {
    charset = site.siteMetadata.charset,
    description = site.siteMetadata.description,
    meta = [],
    title = site.siteMetadata.title,
  } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.locale,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `charset`,
          content: charset,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SeEnOp.defaultProps = {
  description: `Portofolio site of Renji`,
  lang: `en`,
  meta: `utf-8`,
  title: `renjiroazhar`,
}

SeEnOp.propTypes = {
  charset: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SeEnOp
