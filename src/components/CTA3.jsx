import React from 'react'
import { Link } from 'react-router-dom'

const CTA3 = () => {
  return (
    <section className="cta">
        <p className="cta-text1">Want to support and learn more about our community? <br className="sm:block hidden" /> 
        Visit our Instagram Page! </p>
        <Link to="https://www.instagram.com/wadclub/" className="btn" target="_blank">
        Learn More
        </Link>
    </section>
  )
}

export default CTA3