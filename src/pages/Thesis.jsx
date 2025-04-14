import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA1 from '../components/CTA1'
import backgroundImage from '../assets/thesishero.png'
import chatbotUI from '../assets/chatbotui.png'
import restaurant from '../assets/yk.jpeg'
import review from '../assets/review.jpg'
import llm from '../assets/thesishero.jpg'
import jupyter from '../assets/jupyter.png'

const Thesis = () => {
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
          Retrieval Augmented Generation{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Multimodal Chatbot
          </span>
        </h1>
      </section>

      {/* Next Section */}
      <section className="max-container min-h-screen p-10 flex flex-col gap-3 text-slate-50 bg-black space-y-4">

        <h2 className="head-text text-left blue-gradient_text mb-4">
          An enterprise-grade local large language model for automated customer response
        </h2>

        <br />

        <img
          src={llm}
          alt="LLM"
          className="w-full h-full object-cover mb-4"
        />

        <br />


        <h3 className="head-text text-left text-slate-50 mb-4">
          Challenge
        </h3>

        <p className="subsubhead-text">
          In my Bachelor's thesis, I collaborated with local small and medium-sized
          enterprises (e.g., restaurants) to develop an affordable AI
          application tailored to their business needs. The goal was to
          integrate AI into real-world business challenges, making advanced
          technology more accessible and practical.
        </p>

        <br />

        <img
          src={review}
          alt="Review"
          className="w-full h-full object-cover mb-4"
        />

        <img
          src={restaurant}
          alt="Restaurant"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Results
        </h3>


        <p className="subsubhead-text">
          The result is a fully developed, ready-to-use Python-based
          text mining pipeline and a Retrieval-Augmented Generation (RAG)
          chatbot for customer feedback analysis and automated Google Review
          responses. This solution enables affordable, scalable, and customizable
          data analytics and AI integration for businesses, lowering the barriers to AI adoption.
          Ultimately, it ensures that AI is no longer a futuristic concept reserved for tech giants
          but an accessible tool for all businesses and the whole population.
        </p>

        <br />

        <img
          src={chatbotUI}
          alt="Thesis Hero"
          className="w-full h-full object-cover mt-10"
        />

        <img
          src={jupyter}
          alt="Jupyter"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <h3 className="head-text text-left text-slate-50 mb-4">
          Reflection
        </h3>

        <p className="subsubhead-text">
          Through this final year thesis, I discovered the importance of setting
          goals and executing them. Learning to develop an AI application isn't easy
          --let alone planning and developing the Generative AI application. I spent countless
          hours researching, experimenting, and failing, rinsing and repeating until I found the one
          my users' needs.<br /> <br />

          My success mainly stemmed from the my detemintation to push through the challenges of understanding
          my customers' pain points. I developed an "customer first" mindset to look for the ultimate
          solutions. On top of that, I relentlessly sought for guidance from my supervisor
          and spent countless hours debugging codes-- which immediately translates to solutions. Without the perseverence, it would be easy to give up and pursue for a simpler project,
          however, I prevailed... and that I had the will to push through for a greater purpose and greater good.<br /> <br />

          What fueled my will to persist? Simply put, my cravings to learning more. The year I had worked on this project, GenAI applications
          were just booming. I took this opportunity to hone my technical skills, beyond the syllabus. My desire to learn about
          how local GenAI applications were built led me to developing this thesis, or else developing an chatbot
          wouldn't even cross my mind. Now, I have a deeper understanding of Generative AI and the complex issues in both global and local
          context which allows me to contribute meaningfully in this thesis and hopefully to the society in the future. <br /> <br />

          The final year project thought me that knowledge without execution is nothing more than untapped potential.
          No matter how much I learn theoritically, without application on real-world scenarios my knowledge remains meaningless.
          Through hands-on experience, problem-solving, and practical implementation, I realized that true learning and understanding
          comes from doing. This project challenged me to step outside of my comfort zone, adapt to unforseenable challenges,
          and refine my ability to translate idea into actions and meaningful results. Ultimately, it reinforced my believes on the importance of
          goal setting, resillience, adaptability, learning to learn, and execution in the pursue of achieving success and "meaningful" learning.
          <br /> <br />
        </p>

        <p className="subsubhead-text text-center">
          Grade: B+ (Lvl 4 Course 10 credit unit) <br />
          Supervisor: Prof. Chris Ho <br />
          Bachelor Thesis 2025
        </p>

        <br />

        <CTA1 />
      </section>
    </div>
  )
}

export default Thesis
