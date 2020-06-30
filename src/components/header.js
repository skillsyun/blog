import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const SkillHeader = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

SkillHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SkillHeader.defaultProps = {
  siteTitle: ``,
}

export default SkillHeader
