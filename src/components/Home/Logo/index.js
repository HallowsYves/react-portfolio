/*
import './index.scss';
import LogoH from '../../../assets/images/logo-h.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';


const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
  
    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)
  
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outlineLogoRef.current, {
          drawSVG: 2,
          duration: 20,
        })
  
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
    }, [])
  
    return (
        <div className="logo-container" ref={bgRef}>
          <img
            className="solid-logo"
            ref={solidLogoRef}
            src={LogoH}
            alt="JavaScript,  Developer"
          />
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1149.2 977.31">
            
            <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none"
            >
            
            <path ref={outlineLogoRef} d="M765.8,183.3c-53.7,0-104.79,11.12-151.17,31.1-.07,0-.15-.01-.22-.02l21.36-63.56,92.27-70.52L698.66,1.54l-102.26,69.35-42.99,141c-.44.02-.88.02-1.32.03-50.89-25.06-108.13-39.2-168.7-39.2C172.21,172.72,1,343.93,1,555.12s171.21,382.4,382.4,382.4c5.44,0,10.85-.19,16.23-.41,50.89,25.06,108.13,39.2,168.7,39.2,53.7,0,104.79-11.12,151.17-31.1,15.19,1.83,30.62,2.89,46.3,2.89,211.19,0,382.4-171.21,382.4-382.4s-171.21-382.4-382.4-382.4ZM825.22,359.61l62.69,135.56h-185.72l123.03-135.56ZM323.12,354.52l120.87,134.78h-182.19l61.32-134.78ZM848.33,768.85l-85.41-31.34-97.95,86.98-90.37-47.02-86.73,47.02-98.73-86.2-90.11,29.78-61.12-130.08,75.23,59.95,88.16-51.72,82.87,71.11,90.45-71.11,92.91,69.35,81.69-67,82.28,49.37,81.89-59.95-65.04,130.86Z"/>
            </g>
          </svg>
        </div>
      )
    }
    
export default Logo
*/