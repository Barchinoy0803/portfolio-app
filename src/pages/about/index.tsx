import { memo } from 'react'
import fedback1 from "../../assets/fedback1.png"
import fedback2 from "../../assets/fedback2.png"
import fedback3 from "../../assets/fedback3.png"
import fedback4 from "../../assets/fedback4.png"
import { NavLink } from 'react-router-dom'

const About = () => {
  const testimonials = [
    {
      image: fedback1,
      name: "Dilshodbek Khodjakov",
      company: "Payme",
      linkedin: "https://www.linkedin.com/in/dilshodbek-khodjakov/"
    },
    {
      image: fedback2,
      name: "Boburmirzo Rosulov",
      company: "Najot Ta'lim",
      linkedin: "https://www.linkedin.com/in/boburmirzo-rosulov-7a2287226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BatMnrMxdR%2BqNo%2FhMxoC34w%3D%3D"
    },
    {
      image: fedback3,
      name: "Xamidullo Xudoyberdiyev",
      company: "Najot Ta'lim",
      linkedin: "https://www.linkedin.com/in/xam1dullo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5yOvEuLsT7m53aP4uy0mpg%3D%3D"
    },
    {
      image: fedback4,
      name: "Anvarjon Shavqiyev",
      company: "Itransition",
      linkedin: "https://www.linkedin.com/in/anvarjonshavqiyev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlDhvRXCAR0qHLvXYGI3hHQ%3D%3D"
    }
  ]

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='fixed inset-0 -z-10'>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-slide {
          animation: slide 8s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
      <div className='relative z-10 container__pages mx-auto px-4 max-w-6xl'>
        <div className='mb-10 text-center lg:text-left md:mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'>
            About Me
          </h1>
          <div className='max-w-4xl mx-auto lg:mx-0'>
            <p className='text-lg lg:text-xl text-gray-700 leading-relaxed'>
              I work with modern web technologies across both frontend and backend. On the frontend, I use{' '}
              <span className='font-semibold text-blue-600'>React, TypeScript, Tailwind CSS, MUI, and SCSS</span>{' '}
              to create responsive and user-friendly interfaces. For state management and real-time features, I rely on{' '}
              <span className='font-semibold text-purple-600'>Redux Toolkit Query and Socket.IO</span>.
            </p>
            <p className='text-lg lg:text-xl text-gray-700 leading-relaxed mt-4'>
              On the backend, I build applications with{' '}
              <span className='font-semibold text-green-600'>NestJS and Express</span>, using{' '}
              <span className='font-semibold text-indigo-600'>Prisma</span> for ORM. I have experience working with relational and non-relational databases, including{' '}
              <span className='font-semibold text-blue-500'>PostgreSQL, MySQL, and MongoDB</span>. I'm also familiar with Node.js, npm, nodemon, and use Swagger for API documentation.
            </p>
          </div>
        </div>

        <div className='space-y-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
              What Others Say
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid gap-8 lg:gap-12'>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/90 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center gap-6 lg:gap-8`}
              >
                <div className='flex-shrink-0 w-full lg:w-auto'>
                  <img 
                    className='w-full lg:w-[500px] xl:w-[600px] h-auto object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300' 
                    src={testimonial.image} 
                    alt={`Testimonial from ${testimonial.name}`}
                    loading="lazy"
                  />
                </div>
                
                <div className='flex-1 text-center lg:text-left space-y-4'>
                  <div className='space-y-3'>
                    <NavLink 
                      to={testimonial.linkedin}
                      className='inline-block text-xl lg:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-600'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {testimonial.name}
                    </NavLink>
                    <div className='flex items-center justify-center lg:justify-start gap-2'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                      <p className='text-lg text-gray-600 font-medium'>
                        Works at <span className='text-blue-600 font-semibold'>{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(About)