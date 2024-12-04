import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3, faGit, faGitAlt, faHtml5, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])




    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={['A','b','o','u','t', ' ', 'm','e','!']}
                        index={9}
                    />
                </h1>
                <p>
                    I am a previous Amazon Web Services Lambda Intern and 
                    I am a junior at California State University, Fullerton, with a strong passion for technology and problem-solving.
                    I am actively seeking an internship opportunity in Software Engineering, IT, Web Development, or Cybersecurity to apply my technical skills, expand my knowledge, and contribute to innovative projects. 
                    With a dedication to continuous learning and adaptability, I am eager to make a meaningful impact in a dynamic and challenging environment.
                </p>
                <p>
                    {' '}
                    I am a confident and curious individual, constantly striving to learn and grow. I am dedicated to improving my skills through hard work and a passion for tackling new challenges,
                    always eager to expand my knowledge and make a positive impact.
                </p>
                <p>
                    {' '}
                    In my free time, I love producing music and exploring my creativity through different instruments.
                    I play the electric guitar and bass guitar, and I’m currently learning to play the piano. 
                    Music is my passion and a source of inspiration that fuels my drive in all areas of life 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#FFF'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faAws} color="#232f3e" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About