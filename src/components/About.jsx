import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello! I’m from Ukraine. Now I am in Wroclaw. Flexibility is one of my main features that is why I can adapt to any working conditions. I have about <span className='text-[#915eff]'>3 years of experience</span>, creating responsive websites and applications using HTML, CSS, JavaScript, REACT, REDUX, TypeScript, Bootstrap, Docker and NextJS.<br /><br /> I am a quiet, active, open, and motivated individual, due to my strong analytical and critical thinking I can find simple solutions to complex problems. I have a high level of
      <span className='text-[#915eff]'>self-organization</span> and <span className='text-[#915eff]'>self-development</span>. I know how to find a common language with different people, and I am not afraid to take responsibility.<br /><br />
      I believe that our whole life is a <span className='text-[#915eff]'>constant continuous development</span>, where our attention, there’s our energy, and that in our life increases. Therefore I made my choice.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')