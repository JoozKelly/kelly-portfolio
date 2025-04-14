import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA3 from '../components/CTA3'
import backgroundImage from '../assets/cehero.png'
import wad from '../assets/wad.jpg'
import threeh from '../assets/3h.png'
import ceVideo from '../assets/Basics_with_Violet.mp4'
import ceVideo2 from '../assets/Violet_and_Siow_Ik.mp4'
import ceVideo3 from '../assets/Rui_Ming.mp4'
import ceVideo4 from '../assets/Cheerful_Pierre_and_Violet.mp4'
import cep from '../assets/5ce.jpg'

const CE = () => {
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
          We.Are.Different! {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            (W.A.D!) Sports Club
          </span>
        </h1>
      </section>

      {/* Next Section */}
      <section className="max-container min-h-screen p-10 flex flex-col gap-3 text-slate-50 bg-black space-y-4">

        <h2 className="head-text text-left blue-gradient_text mb-4">
          Developing youths to discover who they are and what they want to be through sports!
        </h2>

        <p className="subsubhead-text">
          The university has always emphasized the importance of giving back and service of society - living by the core philosophy of
          heart, head, and habit - to develop competency, social consciousness, and lifelong learning with a heart
          to impact lives.
        </p>

        <br />

        <div className="relative group w-full h-full">
          <img
            src={threeh}
            alt="3H Core Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center mx-2">The SUSS 3H Core Philosophy</p>
          </div>
        </div>

        <br />

        <p className="subsubhead-text">
          I had the privillege to participate and collaborate with W.A.D! Club in their volunteering program @ Harvest Care Center. Collaborating with Coach Joshua (supervisor and manager)
          to provide holistic development opportunities for primary school-aged youths to discover themselves through sports, especially Tchoukball and Basketball.
          The initiative aimed to instill character, competence and confidence through sports while fostering teamwork, social skills and leadership.
        </p>

        <br />

        <img
          src={wad}
          alt="W.A.D! Club"
          className="w-full h-full object-cover mt-10"
        />

        <br />


        <h3 className="head-text text-left text-slate-50 mb-4">
          Results
        </h3>

        <p className="subsubhead-text">
          The opportunity opened a platform for me to excercise the Five Key Elements of SUSS Community Engagement, the foundation
          that guided to contribute more meaningfully within the community and society. Becoming Citizenship Ready in the future.
        </p>

        <br />

        <img
          src={cep}
          alt="Product"
          className="w-full h-full object-cover mt-10"
        />

        <br />

        <p className="subsubhead-text">
          Throughout my time at W.A.D! Club (from 2022 to 2024), I have strived to equip students with
          skills, mindset, and values needed to navigate life's challenges and embark on a journey of self-discovery.
          Through sports, we did out best to convey our knowledge and wisdom into fun and memorable experiences -- that will hopefully be
          cherished, useful, and stay with them for a lifetime. <br /> <br />
        </p>


        <video
          src={ceVideo}
          className="w-full h-auto mt-10 rounded-lg"
          controls
          autoPlay
          loop
          muted
        />

        <br />

        <p className="subsubhead-text">
          Violet overcoming her fears of receiving a ball was a true testament to how
          empowerment, personalized training, and fun, inclusive environment can
          build the confidence and help individuals conquer life's challenges. This wouldn't have
          been possible without the unwavering support, encouragement, and guidance of her peers, especially Siow Ik and Rui Ming,
          who wanted to see her succeed and share the joy of playing tchoukball together her. By teaching
          Violet the foundational skills of sports and the mindset to overcome her fears, she was able to
          shorten the gap with her peers and is now more engaged in games with Siow Ik and Rui Ming. <br /> <br />
        </p>

        <video
          src={ceVideo2}
          className="w-full h-auto mt-10 rounded-lg"
          controls
          autoPlay
          loop
          muted
        />

        <br />

        <p className="subsubhead-text">
          Empowerment and collaboration played a huge role in helping us look for fun ways to arrange the class and build
          the most meaningful envirpnment to play in. Youths had more say when it come the direction they want to grow,
          letting them take ownership and responsibility of how they wanted to grow -- both individually and collaboratively. <br /> <br />
        </p>

        <video
          src={ceVideo3}
          className="w-full h-auto mt-10 rounded-lg"
          controls
          autoPlay
          loop
          muted
        />

        <br />


        <p className="subsubhead-text">
          Last but not least, it was never about me or Coach Joshua—it was always about them.
          That’s why we fostered a two-way relationship, ensuring that while the youth learned from us,
          we also learned from them. We emphasized open communication and active participation,
          creating an environment where their voices mattered. From my very first session,
          I noticed that Coach Joshua never skipped the crucial 5–10 minutes of reflection at the end of each class.
          This practice allowed students to share their key takeaways while also providing valuable feedback,
          helping us refine and enhance each session to be more engaging and meaningful for them.  <br /> <br />
        </p>

        <br />

        <video
          src={ceVideo4}
          className="w-full h-auto mt-10 rounded-lg"
          controls
          autoPlay
          loop
          muted
        />

        <br />

        <p className="subsubhead-text">
          This experience has been filled with invaluable lessons, cherished memories, and immense joy.
          It was an humbling experience that showed how sincerety can foster meaningful connections and
          lasting friendships. <br /> <br />
        </p>

        We often believe that communities need us, but in reality, we need them just as much.

        There were many moments where youths, especially Siow Ik, took charge of the class and lectured me on the right way to play tchoukball — a lesson which was both
        meaningful for me. During times when I had difficulties directing the class and producing modules to teach,
        I sought assistance from Coach Joshua and learned from his experiences.


        Communities are strong and have their own valuable assets, and that it is our duty to respect, support do our best to empower them — just as
        they empower us.

        <br /> <br />



        <h3 className="head-text text-left text-slate-50 mb-4">
          Reflection
        </h3>

        <h3 className="subhead-text text-left text-slate-50 mb-4">
          Personal Philosophy Towards Social Responsibility
        </h3>

        <p className="subsubhead-text">
          My involvement into the community has provided me with an deeper understanding of social responsiblity. To me, social responsibility
          means understanding and addressing unique challenges faced by others while empowering them to realize their full
          potential. I learned that creating opportunities for others to grow includes more than teachning technical skills,
          but also about fostering and building safe, valued and encouraging environment for them to take risks and grow holistically. <br /> <br />

          One particularly meaningful experience to showcase this was with Siow Ik. Siow Ik showed relentless enthusiasm and talent
          for tchoukball, and over time, I encouraged him to guide and teach his peers the fundementals of the games. His leadership skills
          radiated, and he began to develop a habit of working as a team, uplifing teammates and building and inclusive class. <br /> <br />

          Siow Ik openly communicated his joy and aspirations to become a tchoukball coach like coach Joshua and myself in the future.
          This moments was both humbling and rewarding on the same time. Knowing that our mentorship had inspired him to dream
          of a future in coaching was a reminder of the lasting impact an well thought of initiative could have on people's future. <br /> <br />

          The experience reinforced my belief that social responsibility should be a continuous effort and must reciprocate. Looking ahead,
          I am to contribute to more community initiatives where I could instill the same values and life lessons to many more people.
          <br /> <br />

          <h3 className="subhead-text text-left text-slate-50 mb-4">
            Being Citizenship Ready
          </h3>
          The CE experience has also reinforced my understanding of citizenship readiness. To me, citizenship readiness should involve
          into actively participating to societal well-being through compassion, dedication, and meaningdful actions and interactions. <br /> <br />

          My experience with youths shows firsthand how consistent efforts can make significant differences in lives. Be it when
          helping Violet overcome her fears and doubts or encouraging and bringing out the best out of Rui Ming and Siow Ik to take
          courage and responsibility in mentoring and teaching their peers, reminds me of the transformative power of patience, perseverance
          and dedication to teach meaningful values.  <br /> <br />

          This experience has prepared me on future roles in the future. Now, I view citizenship as an active commitment to use one's skills
          and opportunities to uplift others -- which could be transferred and communicated with many meaningful ways, even via sports.<br /> <br />

          <br />

          <h3 className="subhead-text text-left text-slate-50 mb-4">
            Final Thoughts
          </h3>

          All in all, drawing upon the knowledge and strengths of both youth participants and experienced coaches has been instrumental in my journey as a novice tchoukball coach.
          Initially lacking in expertise, I took proactive steps to learn from Coach Joshua and the young players. Encouraging an open exchange of skills and insights, I actively sought guidance from the community,
          particularly appreciating Siow Ik's leadership and constructive feedback. By embracing this collaborative approach, I not only honed my coaching abilities but also cultivated a richer learning environment,
          integrating the diverse assets within the community.
          <br /> <br />

          Furthermore, through regular engagement with training sessions and community interactions, coupled with diligent reflection, while continuously striving to enhance my coaching techniques.
          Actively seeking feedback from Coach Joshua and documenting my experiences allowed me to critically evaluate my teaching methods and adapt them accordingly. Leveraging post-session briefings and ongoing
          communication, I not only tracked the progress of individual players but also remained motivated to refine my instructional approach, fostering continuous improvement. <br /> <br />

          Lastly, championing a student-centered approach empowers youths to take ownership of their learning and development. Structuring class activities around their identified areas for improvement,
          facilitating a dynamic and focused training regimen. Tailoring instruction to individual needs, such as providing foundational skills support for Violets, and encouraging Pierre's natural enthusiasm and
          leadership, fostered a vibrant and inclusive learning environment. By nurturing a culture of initiative and innovation, each participant was empowered to contribute meaningfully to the collective growth of the group.
          <br /> <br />

          I am proud and thankful to have receive all the experience with W.A.D! Sports Club and would like to share testimonial I received from coach Joshua.
        </p>

        <div className="w-full h-screen">
          <embed src="/src/assets/testimonial.pdf" type="application/pdf" className="w-full h-full" />
        </div>

        <br />

        <p className="subsubhead-text text-center">
          Mentor: Joshua Quek <br />
          Staff Advisor: Pamela Loh <br />
          Organization: W.A.D Sports Club @ Harvest Care Center <br />
          My Role: Assistant Coach (Tchoukball & Basketball) <br />
        </p>

        <br />

        <CTA3 />
      </section >
    </div >
  )
}

export default CE
