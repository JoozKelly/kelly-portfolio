import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import backgroundImage from '../assets/taiwanhero.png'
import prototype from '../assets/prototype.png'
import community from '../assets/community.jpg'
import community2 from '../assets/community2.jpg'
import class1 from '../assets/class.jpg'
import isc from '../assets/isc.jpg'
import deputy from '../assets/deputy.jpg'
import isc2 from '../assets/isc2.jpg'

const OE = () => {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y bg-black">
      {/* Fullscreen Hero Section */}
      <section className="h-screen flex items-center justify-center px-5 lg:px-20 snap-start"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h1 className="superhead-text text-left lg:text-center p-10 text-slate-50">
          Taiwan  {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Impact Startup Challenge
          </span>
        </h1>
      </section>

      {/* Next Section */}
      <section className="max-container min-h-screen p-10 flex flex-col gap-3 text-slate-50 bg-black space-y-4">

        <h2 className="head-text text-left blue-gradient_text mb-4">
          Addressing aging issues in Taiwan.
        </h2>

        <p className="subsubhead-text">
          Impact Startup Challenge @ Taiwan is a one-week entrepreneurship program addressing aging issues in Taiwan.
          This overseas exchange program serves as a launchpad for startups to address aging issues in Taiwan.

        </p>

        <br />

        <div className="relative group w-full h-full">
          <img
            src={class1}
            alt="Class 1"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">Class 1: Onboarding and Group Forming Session</p>
          </div>
        </div>

        <br />

        <p className="subsubhead-text">
          Parterning
          with student from National Cheng Kung University (NCKU), we set our foot onto foreign land, enriching our entrepreneurship
          journey with global collaboration and insights.
        </p>

        <div className="relative group w-full h-full">
          <img
            src={community}
            alt="Community"
            className="w-full h-full object-cover mt-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">Community Meetup</p>
          </div>
        </div>

        <br />

        <p className="subsubhead-text">
          As a first time Entrepreneur, I took this opportunity to partner with Taiwan student and connect with your end-users and understand how we would better angle ourselves
          to support them.
        </p>

        <div className="relative group w-full h-full">
          <img
            src={community2}
            alt="Community"
            className="w-full h-full object-cover mt-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">Community Meetup</p>
          </div>
        </div>

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Results
        </h3>

        <p className="subsubhead-text">
          We created a platform to connect Volunteers in Taiwan to support the aging population called Lynk.
          <br /> <br />
          A LINE community served as the prototype and main platform.
        </p>

        <br />

        <img
          src={prototype}
          alt="Product"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <p className="subsubhead-text">
          The one-week program provided 1-year worth of Entrepreneurship, ideating, and validating experience. The perfect
          launchpad for my startup journey.<br /> <br />
        </p>


        <img
          src={isc}
          alt="ISC Taiwan"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Reflection
        </h3>

        <p className="subsubhead-text">
          Throughout my journey as a first-time startup co-founder, I discovered the true essence of teamwork, emotional intelligence,
          and cultural sensitivity. I also got the privellage receive invaluable insights on the aging population in
          Taiwan. <br /> <br />

          During the early-stages of the program, I learned that issues around gereontology isn't a one-dimensional issue. Aging is a
          global issue. It is common for seniors to retire, but, from our interviews, we found that keeping the body active beyond retirement
          is important for seniors to maintain health.  <br /> <br />

          In Taiwan, we discovered that recruiting senior volunteers is challenging and outdated (based on our conversation with Wu Yun Yan, the Chief of Zhang Sheng Village).
          The means to reach out to seniors is almost absent and inefficient. Making opportunities very exclusive. <br /> <br />

          <br />
          <img
            src={deputy}
            alt="Deputy"
            className="w-full h-full object-cover mb-4"
          />
          <br />

          Which is why, we decided to open a platform for this. Many seniors are conencted with communities, but
          many more are disconnected. We spoken with seniors one-on-one to understand their desires, which was to be active, but had not platform to participate into these activities.<br /> <br />

          The validation made it clear that moving forward, as a Chief Technology Officer, my contributions should focus on bridging the digital gap that seniors face, to ease their
          ability to navigate through the digital world and reconnect with the activities they enjoy. Empowering inclusivity and equality (SDG 10) so that seniors can continue to
          thrive professionally, socially, and financially.<br /> <br />

          <br />



          <img
            src={isc2}
            alt="ISC"
            className="w-full h-full object-cover mb-4"
          />

          <br />

        </p>


        <p className="subsubhead-text text-center">
          Team: Kelly Glueck Tayong, Sushin, Rose <br />
          Partner: National Cheng Kung University (NCKU) <br />
          My Role: Concept, UX, UI

        </p>

        <br />
      </section >
    </div >
  )
}

export default OE
