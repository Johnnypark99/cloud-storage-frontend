import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata{
				title
				}
			}
		}
	`)
	return (
		<header 
           style={{
             background: `rebeccapurple`,
             marginBottom: `1.45rem`,
           }}
		>
		  <h1>
		     <Link 
          		style={{
          		  color: `white`,
          		  textDecoration: `none`,
          		}}
		        to="/"
		 	 >
		    	{data.site.siteMetadata.title}
			 </Link>
		  </h1>
		</header>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
