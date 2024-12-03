import './index.scss';
import LogoH from '../../../assets/images/logo-h.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4
            }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoH} alt="H" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
            <g
                className='svg-container'
                transform='translate(0,457) scale(.1,-.1)'
                fill="None"
            >
                
                <path ref={outlineLogoRef}
                d="M2517 4968 c-8 -18 -85 -189 -171 -379 -86 -190 -156 -351 -156 -357
                0 -9 130 -12 525 -12 344 0 525 3 525 10 0 15 -678 764 -695 768 -8 2 -20 -10
                -28 -30z"/>
                <path d="M5274 4768 c-109 -122 -270 -300 -356 -396 -87 -96 -155 -178 -152
                -183 3 -5 233 -9 540 -9 462 0 534 2 534 15 0 19 -351 795 -360 795 -3 0 -96
                -100 -206 -222z"/>
                <path d="M5742 3174 c-202 -157 -226 -173 -245 -162 -12 6 -120 72 -240 145
                -119 74 -221 133 -226 131 -5 -2 -108 -86 -228 -187 -120 -102 -225 -191 -234
                -198 -18 -15 -10 -20 -411 285 -76 57 -143 102 -150 99 -7 -3 -125 -91 -263
                -196 -137 -105 -257 -191 -265 -191 -13 0 -184 139 -423 344 -32 27 -63 46
                -71 43 -8 -3 -125 -69 -261 -147 l-247 -141 -42 35 c-23 19 -116 95 -205 170
                -147 122 -181 147 -181 131 0 -11 343 -721 353 -731 9 -9 72 10 257 77 135 49
                250 89 257 89 7 0 67 -49 135 -108 358 -316 461 -403 471 -399 7 3 117 66 246
                141 129 75 240 136 247 136 10 0 312 -160 496 -263 l37 -20 93 85 c51 47 176
                163 277 257 101 94 189 171 195 171 6 0 121 -40 256 -89 196 -71 248 -86 258
                -77 19 18 343 717 340 732 -2 7 -99 -63 -226 -162z"/>
            </g>
            </svg>
        </div>
    )
}

export default Logo