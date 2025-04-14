import React from 'react'
import { Link } from 'react-router-dom'

const CTA1 = () => {
  return (
    <section className="cta">
        <p className="cta-text1">Want a demo? <br className="sm:block hidden" /> 
        Reach out and let me know! </p>
        <Link to="/contact" className="btn">
        Contact
        </Link>
    </section>
  )
}

export default CTA1