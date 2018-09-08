import React from 'react'
import Link from 'gatsby-link'

const Header = ({siteTitle}) => (
    <div
        style={{
            background: 'black',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>

            <div className='header-menu'>
                <Link to="/about">about</Link>
                <Link to="/photos">photos</Link>
                <Link to="/contact">contact</Link>
            </div>
        </div>
    </div>
)

export default Header
