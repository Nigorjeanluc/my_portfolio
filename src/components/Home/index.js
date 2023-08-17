/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d', 'i', 'r', 'a', 'm', 'i', 'y', 'e']
    const jobArray1 = ['f', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const jobArray2 = ['&', ' ', 'd', 'e', 'v', 'O', 'p', 's', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={16}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray1}
                    idx={23}
                /> <br /> 
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray2}
                    idx={42}
                /></h1>
                <h2>Fullstack developer / JavaScript Expert / DevOps engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home