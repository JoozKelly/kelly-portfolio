import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import llama from '../assets/llama.png';
import rag from '../assets/rag.png';
import vb from '../assets/vb.png';
import isc from '../assets/isc.png';
import { useTransition, animated } from '@react-spring/web';



const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-btn bg-white">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
         py-4 px-8 text-black mx-5">
            Hi! I'm <span className="font-semibold">Kelly</span>👋,
            <br />
            a Business Analyst graduate from Singapore. Welcome to my portfolio!
        </h1>
    ),
    2: (
        <InfoBox
            text={<span className="text-black sm:text-xl sm:leading-snug"> My journey began when I first set foot in <span className="font-semibold"> Singapore</span>, starting a new chapter of my life as student in the Business School of <span className="font-semibold">Singapore University of Social Sciences</span>.</span>}
            link="/about"
            btnText="More about me"
        />

    ),
    3: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
         py-4 px-8 text-black mx-5">
            This site showcases the <span className="font-semibold"> milestones and memories</span> from my four years at SUSS. Here are some of the highlights!
            <br />
        </h1>
    ),
    4: (
        <InfoBox
            text={
                <span className="flex item-baseline gap-2 text-left">
                    <img src={llama} alt="RAG" className="w-20 h-20 object-cover rounded-md mt-1" />
                    <span>
                        <span className="font-bold text-lg text-black"> Bachelor Thesis - Large Language Model Chat System </span>
                        <span className="text-sm sm:text-base text-black ml-2 "> <br /> I developed an enterprise-grade <span className="font-semibold"> Retrieval- Augmented Generation (RAG) multimodal chatbot </span>.</span>
                    </span>
                </span>
            }
            link="/thesis"
            btnText="View Bachelor Thesis"
        />
    ),
    5: (
        <InfoBox
            text={
                <span className="flex item-baseline gap-2 text-left">
                    <img src={vb} alt="Entrepreneurship" className="w-20 h-20 object-cover rounded-md mt-1" />
                    <span>
                        <span className="font-bold text-lg text-black"> Entrepreurship Work Attachment </span>
                        <span className="text-sm sm:text-base text-black ml-2"> <br /> With passion in  <span className="font-semibold">Entrepreneurship</span>, <br/>I siezed the opportunity to <span className="font-semibold">build a startup</span>.  </span>
                    </span>
                </span>
            }
            link="/WA"
            btnText="View Startup Idea"
        />
    ),
    6: (
        <InfoBox
            text={<span className="text-black sm:text-balance sm:leading-snug"> Giving back has always been close to my heart. I had the privilege of coaching  <span className="font-semibold">basketball and tchoukball</span> as part of the <span className="font-semibold">Community Engagement (CE) Programme</span> at W.A.D! Sports Club @ Harvest Care Center.</span>}
            link="/CE"
            btnText="View Community Engagement"
        />
    ),
    7: (
        <InfoBox
            text={
                <span className="flex item-baseline gap-2 text-left">
                    <img src={isc} alt="Overseas Experience" className="w-20 h-20 object-cover rounded-md mt-1" />
                    <span>
                        <span className="font-bold text-lg text-black"> Taiwan Impact Startup Challenge </span>
                        <span className="text-sm sm:text-base text-black ml-2"> <br /> To broaden my horizons, I embarked on an <span className="font-semibold"> Overseas Impact Startup Challenge in Taiwan</span> with SUSS Entrepreneurship Team.</span>
                    </span>
                </span>
            }
            link="/OE"
            btnText="View Overseas Experience"
        />
    ),
    8: (
        <InfoBox
            text={<span className="text-black sm:text-balance sm:leading-snug"> Today, I spend most of my time <span className="font-semibold">programming my ideas</span> to broaden my skills. Following are some of my recent <span className="font-semibold">projects</span>.</span>}
            link="/projects"
            btnText="View Projects"
        />
    ),
    9: (

        <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5">
            Thank you for exploring my journey! <span className="font-semibold">Want to connect?</span>
            <br />
            Feel free to follow me on{" "}
            <a
                href="https://www.instagram.com/jooz_kelly/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#b37337] hover:text-[#eb5c15] transition-all"
            >
                Instagram!
            </a>
        </h1>
    ),
}


const HomeInfo = ({ currentStage }) => {
    const [activeStage, setActiveStage] = useState(currentStage);
  
    const transitions = useTransition(currentStage, {
      from: { opacity: 0, transform: 'translateY(10px)' },
      enter: { opacity: 1, transform: 'translateY(0px)' },
      leave: { opacity: 0, transform: 'translateY(-10px)' },
      config: { duration: 400 },
      onChange: () => setActiveStage(currentStage),
    });
  
    return transitions((styles, item) =>
        item && renderContent[item] ? (
          <div className="w-full flex justify-center mt-1 absolute top-0 left-0 z-10">
            <animated.div style={styles}>
              {renderContent[item]}
            </animated.div>
          </div>
        ) : null
    );
  };

export default HomeInfo