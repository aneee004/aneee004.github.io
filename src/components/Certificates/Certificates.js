import React,{ useContext, useState } from 'react';
import Marquee from "react-fast-marquee";

import './Certificates.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { certificatesData } from '../../data/certificatesData'
import { certificatesImage } from '../../utils/certificateImage'

function Certificates() {

    const { theme } = useContext(ThemeContext);
    const [isPaused, setIsPaused] = useState(false);

    const certificateBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="certificates" style={{backgroundColor: theme.secondary}}>
            <div className="certificatesHeader">
                <h2 style={{color: theme.primary}}>Certificates</h2>
            </div>
            <div className="certificatesContainer">
                <div 
                    className="certificate--scroll"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={!isPaused} 
                        autoFill={true}
                        direction="right"
                    >
                        {certificatesData.map((cert) => (
                            <a
                                className="certificate--box"
                                key={cert.id}
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                style={certificateBoxStyle}
                            >
                                <img src={certificatesImage(cert.name)} alt={cert.name} />
                                <h3 style={{color: theme.tertiary}}>
                                    {cert.title}
                                </h3>
                            </a>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Certificates
