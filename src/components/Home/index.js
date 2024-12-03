import { Link } from 'react-router-dom';
import LogoSubtitle from '../../assets/images/H-logo.png';
import Logo from './Logo';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'l', 'l','o','w', 's', 'y','v','e','s']
    const jobArray = ['s','o','f','t','w','a','r','e',' ', 'd','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone"> 
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoSubtitle} alt="software developer" />
                <AnimatedLetters letterClass={letterClass}
                stringArray={nameArray}
                index={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                stringArray={jobArray}
                index={22} />
                </h1>
                <h2> Student, Developer, Musician</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}
export default Home