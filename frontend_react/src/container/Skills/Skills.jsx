import React, {useState, useEffect} from 'react'
import './Skills.scss'

import {motion} from 'framer-motion'
import { urlFor, client } from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Skills = () => {
  const[skills, setSkills] = useState([]);
  const[experiences, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data)=>{
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data)=>{
      setSkills(data);
    });
  }, [])


  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences
            .sort((a,b) => b.year - a.year)
            .map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tooltip-id='exp-tooltip'
                        data-tooltip-content={work.desc}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                        <Tooltip id="exp-tooltip" className='.skills-tooltip' effect='solid' cursor="#fff"/>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'), 'skills', "app__whitebg")
