import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import jpm from '../assets/jpmorgan.jpeg'
import jpm1 from '../assets/jpmorgan1.jpeg'
import jpm2 from '../assets/jpmorgan2.jpeg'
import { useState } from 'react'; // Only if not already imported


const Projects = () => {

  const images = [
    { src: jpm, caption: 'J.P. Morgan Corporate Challenge 2023' },
    { src: jpm1, caption: 'Most Influential University Team 2023' },
    { src: jpm2, caption: 'Trophy' }
  ];
  // Inside the component:
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold
        drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous projects throughout the years,
          but these are
          the ones I hold closest to my heart. Many of them are
          open-source, so if
          you come across something that piques your interest, feel free
          to
          explore the codebase and contribute your ideas for
          futher enhancements.
          You collationation in highlight valued!</p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center
              items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 
              font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold
        drop-shadow">Activities</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous activities throughout the years,
          but these are
          the ones I hold closest to my heart.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-1 
              font-poppins my-6">
        <Link
          to="https://www.linkedin.com/posts/patrick-tan-teck-keong_susssg-studentsuccess-university-activity-7057646150052442112-BLHy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADX71rUBW2iAUgOW1-qpTdBUNhQoHkp5Xn4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-poppins font-semibold text-blue-600"
        >
          J.P Morgan Chase
        </Link>
        <img
          src={arrow}
          alt="arrow"
          className="w-4 h-4 object-contain"
        />
      </div>

      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Overlay with caption */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold text-center mx-4">
            {images[currentIndex].caption}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
        >
          ›
        </button>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default Projects