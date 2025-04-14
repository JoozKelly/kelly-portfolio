import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA2 from '../components/CTA2'
import backgroundImage from '../assets/entrepreneurship.png'
import product1 from '../assets/product1.png'
import news2 from '../assets/news2.png'
import news1 from '../assets/news1.png'
import partners from '../assets/partners.png'
import vb from '../assets/vb.jpg'
import shirt1 from '../assets/tshirt1.png'
import shirt2 from '../assets/tshirt2.png'
import mw from '../assets/mwhero.png'

const WA = () => {
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
          SUSS Venture Builder Program{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            MatchWise Pte. Ltd
          </span>
        </h1>
      </section>

      {/* Next Section */}
      <section className="max-container min-h-screen p-10 flex flex-col gap-3 text-slate-50 bg-black space-y-4">

        <h2 className="head-text text-left blue-gradient_text mb-4">
          A job and course matching platform for senior talents.
        </h2>

        <p className="subsubhead-text">
          Singapore's growing inflation, volatile market, falling employment rates and increasing life expentancy on retirement raises
          concerns for the aging population to either postpone or re-enter the workforce. Our startup seeks to narrow down the gap and make it
          easier for seniors to re-skill and ultimately re-enter the workforce.
        </p>

        <br />

        <div className="relative group w-full h-full">
          <img
            src={news1}
            alt="News 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">News 1: S’pore retirement age to go up to 64 in 2026, re-employment age to rise to 69</p>
          </div>
        </div>


        <div className="relative group w-full h-full">
          <img
            src={news2}
            alt="News 2"
            className="w-full h-full object-cover mt-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">News 2: Budget 2025: Support boost to help employers hold on to older workers</p>
          </div>
        </div>

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Results
        </h3>

        <p className="subsubhead-text">
          The new platform covers all the touchpoints necessary for offering streamlined work application
          experience for full-time and contract work, as well as gig-opportunities for senior talents. The startup also
          helps talents to stay relevant, improve their employability, encourage lifelong learning, and development through
          upskilling opportunities. This bridges the gap between seniors seeking work and new skills, employers seeking experienced talents,
          and course providers seeking for learners.
        </p>

        <br />

        <img
          src={product1}
          alt="Product"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <p className="subsubhead-text">
          Throughout the 6-months long Venture Builder Program in SUSS, we were exposed to many entrepreneurship opportunities
          and equipped with the neccessary skills and mindset to keep up with the fast paced entrepreneurial world. Here are a few meaningful skills
          I picked up throughout my journey as a first-time co-founder and chief technology officer in MatchWise.<br /> <br />
        </p>


        <img
          src={vb}
          alt="Venture Builder Batch"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Reflection
        </h3>

        <h3 className="subhead-text text-left text-slate-50 mb-4">
          What is a startup?
        </h3>

        <p className="subsubhead-text">
          Throughout my journey as a first-time startup co-founder, I discovered the true essence of "hustling", adapting with the fast-paced
          environment, building meaningful team culture and fostering relentless drive to make an impact. Intially, I assumed that building a startup was
          straightforward -- however, I couldn't have been more wrong. The experience was a revelation that shifted the way I view the world, business and innovvation, and ultimately my
          career direction. <br /> <br />

          When it comes to building startups, many people mistake it for building a compelling product or cutting-edge technology. However, success doesn't stem from products alone -- it's about the impact you create and the ability
          to notice market opportunities.<br /> <br />

          A successful startup is driven by it's ability to identify and validate problems, tackle them head-on, and ensuring that customers come back for more. This is true "impact". Regardless of how innovative and cutting-edge the product is, as long as you're
          providing what users need to overcome their pain-points, and that they like it, you'll likely succeed in the long run. Technology and innovation comes fourth, after execution, team-building, and a strong company culture --
          elements that propel the startup into long-term stability and into a industry distruptor.<br /> <br />

          Take Mark Zuckerberg's ability to identify the need for transformation in online communication. In the era of the internet boom, he took the opportunity to
          kickstart Facebook, a social media platform that connected billions of users around the world and enabled ease of communication and connecting with people online. It wasn't just about technology;
          but about solving a problem at the right time with the right solutions. <br /> <br />

          <h3 className="subhead-text text-left text-slate-50 mb-4">
            Hustle: The Key to Startup Success.
          </h3>
          Hustle is an invaluable skill I acquired during my time as a co-founder and Chief Technology Officer. I had the privelege of
          overseeing a range of critical projects -- many of which were entirely new to me. From developing the minimum-viable-product(MVP) that required
          automation, front-end and back-end systems development (that usually took a team of more than 3 people to develop), I had to navigate an immense learning curve.
          Despite the challenges, I successfully built an MVP within 3-months by embracing creative problem-solving, sleepless nights, seeking solutions that align with our strategic objectives
          and consulting numerous stakeholders for beta testing. <br /> <br />

          Coming up with an practical solution was one thing and keeping the solution lean was another thing. We had to narrow down and pivot our solution day by day to fit our customer's needs
          and address their biggest issues. It was a daring challenge but an satisfying one to overcome. This wouldn't have been possible without an opportunistic mindset,
          the support from other entrepeneurs and the encouragements we receive from our customers, stakeholders and our partners. <br /> <br />

          Beyond my technical reposibilities, I took the initiative to assist my
          co-founders with business development, pitching, and onboarding tasks,
          even logo and t-shirt design! -- ensuring that our startup was not just functional but also
          market ready.<br /> <br />

          <br />

          <img
            src={shirt1}
            alt="Shirt"
            className="w-full h-full object-cover mb-4"
          />

          <img
            src={shirt2}
            alt="Shirt2"
            className="w-full h-full object-cover mb-4"
          />

          <br />

          Our hustle paid off, and proved as an critical skill every entrepreneurs must have. We built MatchWise from ground-zero within 6 months as a team of three -- overcoming difficult challenges, both individually and collectively.
          At the end of the day, collaboration and teamwork that made it all more possible.
          Without it, we wouldn't have survive the intense demands of the startup world.
          <br /> <br />

          Being opportunistic in gathering and validating business ideas, establishing partnerships, and acquiring users, demonstrates our ability to hustle in the competitive startup landscape.
          Despite challenges and adversities, rejections, and pivoting, we persevered and enabled us to make strategic pivots in its business model to fit industry needs, while placing us in a position to qualify for newer opportunities
          to grow our resources and capabilities. <br /> <br />

          The constant lookout for opportunities to pitch for funding, programmes, and new ecosystems also paid off, with us gaining entry into the ecosystems
          beyond SUSS to include SUTD, NUS, and Youth Co:lab. Through a particular programme with NUS, we were able to headhunt and acquire new members to join out startup.
          <br /> <br />

          We are also proud to share that we have established partnership with the following organizations, firms and institutions. To date, we have fundraised at least $SGD 50,000 to scale our company
          and received our first and many more customers -- all within the 6-month of the program.
        </p>

        <br />

        <img
          src={partners}
          alt="Partners"
          className="w-full h-full object-cover mb-4"
        />

        <br />

        <h3 className="subhead-text text-left text-slate-50 mb-4">
          Final Thoughts
        </h3>

        <p className="subsubhead-text">
          The journey has taught me that startups are not built on ideas alone -- they are built on relentless
          execution, adaptability and teamwork. The ability to hustle, stay opportunistic, and continuously iterate on ideas seperates
          successful startups from the rest. While the technology plays a role, it is ultimately the ability to solve real problems, sieze
          market opportunities, and build strong culture that defines long-term success.
          <br /> <br />

          Looking back, I realize that this experience wasn't just about building a company -- it was about building the
          mindset neccessary to navigate the unpredictable, ever-changing landscape of entrepeneurship. And that to me, is the greatest
          lesson of all. <br /> <br />

          I am committed to continuing my journey as an entrepreneur, and this is just the beginning. Stay tuned—there’s much more to come!
        </p>

        <br />

        <img
          src={mw}
          alt="Shirt"
          className="w-full h-full object-cover mb-4"
        />

        <br />

        <p className="subsubhead-text text-center">
          My Role: CTO (Coding, Prototyping, Concept, UI/UX) <br />
          Team: Kelly Glueck Tayong, Jonathan Lim, Cheraldyn Lim <br />
          Competitions: NTNU 2023 Startup Arena (1st Place Winner) <br />
          Venture Builder Batch 3
        </p>

        <br />

        <CTA2 />
      </section >
    </div >
  )
}

export default WA
