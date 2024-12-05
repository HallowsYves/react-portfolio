import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef  } from 'react';
import emailjs from '@emailjs/browser'

const Contact = ()  => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_0w95i0u',
            'template_cd4q5fq',
            refForm.current,
            'vrGlCmZ9nl_9fqmwu'
        )
        .then(
            () => {
                alert('Message Successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )

    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                                         stringArray={['C', 'o','n','t','a','c','t', ' ' , 'm','e']} 
                                         index={15}
                                         />
                    </h1>
                    <p>
                     I’m based in California and am always excited to connect with others who share a passion for innovation and impactful work. Whether it’s onsite opportunities in the area or remote roles that allow collaboration across distances, I’m open to exploring new challenges and opportunities. Feel free to reach out—I’d love to hear from you!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'> 
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'> 
                                    <input type='email' name="email" placeholder='email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact