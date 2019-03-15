import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const CustomLink = ({
  linkType,
  linkURL,
  rel = '',
  title = '',
  children,
  className = '',
}) => {
  if (linkType === 'internal') {
    return (
      <Link rel={rel} title={title} className={className} to={linkURL}>
        {children}
      </Link>
    )
  } else {
    return (
      <a rel={rel} title={title} className={className} href={linkURL}>
        {children}
      </a>
    )
  }
}

CustomLink.propTypes = {
  linkType: PropTypes.string,
}

export default CustomLink

// <CustomLink linkType="internal" linkUrl="/#hastag" children, className="" />
