import './index.scss'
import AnimatedLetters from "../AnimatedLetters"

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        stringArray={['A','b','o','u','t', ' ', 'm','e','!']}
                        index={16}
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

        </div>
    )
}

export default About