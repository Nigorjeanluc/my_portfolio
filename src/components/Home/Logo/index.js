import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {

    // const bgRef = useRef()
    // const outlineLogoRef = useRef()
    // const solidLogoRef = useRef()

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)

    //     gsap.timeline().to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1,
    //     })
    //     .from(outlineLogoRef.current, {
    //         drawSVG: 0,
    //         duration: 20
    //     })

    //     gsap.fromTo(
    //         solidLogoRef.current,
    //         {
    //           opacity: 0,
    //         },
    //         {
    //           opacity: 1,
    //           delay: 4,
    //           duration: 4,
    //         }
    //     )
    // }, [])

    return (
        <div className='logo-container' /*ref={bgRef}*/>
            <img className='solid-logo' src={LogoS} alt="s" />
            {/* <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="759.000000pt"
                height="897.000000pt"
                viewBox="0 0 759.000000 897.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g className="svg-container" transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)"
                fill="none">
                <path
                    ref={outlineLogoRef}
                    d="M880 4625 l0 -4225 915 0 915 0 0 1583 c0 1809 -5 2014 -70 2737 -31
                    336 -154 1472 -185 1698 -6 43 -6 43 21 40 26 -3 34 -18 149 -303 238 -589
                    414 -985 633 -1421 72 -143 607 -1175 1189 -2294 l1059 -2035 997 -3 997 -2 0
                    4225 0 4225 -910 0 -910 0 0 -1632 c0 -936 4 -1729 10 -1858 23 -517 67 -1015
                    175 -2008 24 -224 47 -444 51 -490 l7 -82 -25 0 c-24 0 -33 18 -148 308 -216
                    543 -392 950 -557 1292 -51 107 -594 1157 -1205 2333 l-1112 2137 -998 0 -998
                    0 0 -4225z"/>
                </g> 
            </svg> */}
        </div>
    )
}

export default Logo