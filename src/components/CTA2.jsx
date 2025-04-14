import React from 'react'
import { Link } from 'react-router-dom'

const CTA2 = () => {
  return (
    <section className="cta">
        <p className="cta-text1">Want to learn more about our startup? <br className="sm:block hidden" /> 
        Visit us to find our more! </p>
        <Link to="https://linktr.ee/matchwise_sg" className="btn" target="_blank">
        Learn More
        </Link>
    </section>
  )
}

export default CTA2